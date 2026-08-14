from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.database.models import Company, Job
from app.schemas.job import JobCreate, JobResponse


router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"]
)


@router.post("/", response_model=JobResponse)
def create_job(
    job: JobCreate,
    db: Session = Depends(get_db)
):
    # Check whether the company exists
    company = (
        db.query(Company)
        .filter(Company.id == job.company_id)
        .first()
    )

    if not company:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )

    new_job = Job(
        company_id=job.company_id,
        title=job.title,
        description=job.description,
        location=job.location,
        job_type=job.job_type,
        experience=job.experience,
        salary=job.salary,
        required_skills=job.required_skills,
        qualifications=job.qualifications,
        responsibilities=job.responsibilities
    )

    db.add(new_job)
    db.commit()
    db.refresh(new_job)

    return new_job