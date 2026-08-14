from pydantic import BaseModel, EmailStr


class RecruiterSignup(BaseModel):
    name: str
    email: EmailStr
    company: str
    password: str

class RecruiterLogin(BaseModel):
    email: EmailStr
    password: str

class RecruiterResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    company: str

    class Config:
        from_attributes = True