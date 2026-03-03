from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    token: str

class GovScoreUpdate(BaseModel):
    has_gst: bool
    has_udyam: bool
    has_license: bool
