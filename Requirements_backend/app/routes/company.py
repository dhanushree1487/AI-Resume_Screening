from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.database.models import Company
from app.schemas.company import CompanyCreate, CompanyResponse

router = APIRouter(
    prefix="/companies",
    tags=["Companies"]
)


@router.post("/", response_model=CompanyResponse)
def create_company(
    company: CompanyCreate,
    db: Session = Depends(get_db)
):
    existing_company = (
        db.query(Company)
        .filter(Company.email == company.email)
        .first()
    )

    if existing_company:
        raise HTTPException(
            status_code=400,
            detail="Company with this email already exists"
        )

    new_company = Company(
        company_name=company.company_name,
        email=company.email,
        location=company.location,
        description=company.description
    )

    db.add(new_company)
    db.commit()
    db.refresh(new_company)

    return new_company