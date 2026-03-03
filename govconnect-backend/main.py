from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from jose import jwt, JWTError



from database import SessionLocal, engine, Base
import models, schemas, auth

# Setup app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")
SECRET_KEY = "govconnectsecret"
ALGORITHM = "HS256"

# Dependency for DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# === Auth helpers ===
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = db.query(models.User).filter(models.User.email == email).first()
        if user is None:
            raise HTTPException(status_code=401, detail="User not found")
        return user.email
    except JWTError:
        raise HTTPException(status_code=401, detail="Token error")

# === Signup ===
@app.post("/signup")
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed = auth.hash_password(user.password)
    new_user = models.User(email=user.email, hashed_password=hashed)
    db.add(new_user)
    db.commit()
    return {"msg": "registered"}

# === Login ===
@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = auth.create_token({"sub": user.email})
    return {"token": token}

# === Complaints ===
class Complaint(BaseModel):
    title: str
    description: str
    status: Optional[str] = "Pending"
    user_email: Optional[str] = ""

class ComplaintUpdate(BaseModel):
    id: int
    status: str

complaints_db = []

@app.post("/complaints")
def submit_complaint(data: Complaint, user_email: str = Depends(get_current_user)):
    data.user_email = user_email
    complaints_db.append(data)
    return {"msg": "Complaint submitted"}

@app.get("/my-complaints", response_model=List[Complaint])
def get_user_complaints(user_email: str = Depends(get_current_user)):
    return [c for c in complaints_db if c.user_email == user_email]

@app.get("/all-complaints", response_model=List[Complaint])
def get_all_complaints(user_email: str = Depends(get_current_user), status: str = None):
    if user_email != "admin@govconnect.com":
        raise HTTPException(status_code=403, detail="Admins only")
    if status:
        return [c for c in complaints_db if c.status == status]
    return complaints_db

@app.put("/update-complaint")
def update_complaint_status(update: ComplaintUpdate, user_email: str = Depends(get_current_user)):
    if user_email != "admin@govconnect.com":
        raise HTTPException(status_code=403, detail="Admins only")
    if 0 <= update.id < len(complaints_db):
        complaints_db[update.id].status = update.status
        return {"msg": "Status updated"}
    raise HTTPException(status_code=404, detail="Complaint not found")


from models import GovScoreData
from schemas import GovScoreUpdate
from sqlalchemy.orm import Session
from database import SessionLocal

@app.post("/govscore")
def update_govscore(data: GovScoreUpdate, user_email: str = Depends(get_current_user)):
    db = SessionLocal()
    entry = db.query(GovScoreData).filter(GovScoreData.user_email == user_email).first()
    if not entry:
        entry = GovScoreData(user_email=user_email, has_gst=int(data.has_gst),
                             has_udyam=int(data.has_udyam), has_license=int(data.has_license))
        db.add(entry)
    else:
        entry.has_gst = int(data.has_gst)
        entry.has_udyam = int(data.has_udyam)
        entry.has_license = int(data.has_license)
    db.commit()
    return {"msg": "GovScore updated"}

@app.get("/govscore")
def get_govscore(user_email: str = Depends(get_current_user)):
    db = SessionLocal()
    entry = db.query(GovScoreData).filter(GovScoreData.user_email == user_email).first()
    if not entry:
        return {"score": 0, "details": "No data"}
    score = sum([entry.has_gst, entry.has_udyam, entry.has_license]) * 33
    return {
        "score": score,
        "details": {
            "GST": bool(entry.has_gst),
            "Udyam": bool(entry.has_udyam),
            "License": bool(entry.has_license)
        }
    }
