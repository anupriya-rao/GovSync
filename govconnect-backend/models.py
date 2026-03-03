from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

class GovScoreData(Base):
    __tablename__ = "govscore"
    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String, index=True)
    has_gst = Column(Integer, default=0)
    has_udyam = Column(Integer, default=0)
    has_license = Column(Integer, default=0)
