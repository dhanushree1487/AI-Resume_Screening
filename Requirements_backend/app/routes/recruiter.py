from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import SessionLocal
from app.database.models import Recruiter
from app.schemas.recruiter import RecruiterSignup,RecruiterLogin, RecruiterResponse

router = APIRouter(
    prefix="/recruiters",
    tags=["Recruiters"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/signup", response_model=RecruiterResponse)
def recruiter_signup(
    recruiter: RecruiterSignup,
    db: Session = Depends(get_db)
):
    existing = db.query(Recruiter).filter(
        Recruiter.email == recruiter.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_recruiter = Recruiter(
        name=recruiter.name,
        email=recruiter.email,
        company=recruiter.company,
        password=recruiter.password
    )

    db.add(new_recruiter)
    db.commit()
    db.refresh(new_recruiter)

    return new_recruiter
@router.post("/login", response_model=RecruiterResponse)
def recruiter_login(
    recruiter: RecruiterLogin,
    db: Session = Depends(get_db)
):
    existing = db.query(Recruiter).filter(
        Recruiter.email == recruiter.email
    ).first()

    if not existing:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if existing.password != recruiter.password:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    return existing