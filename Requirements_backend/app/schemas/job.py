from pydantic import BaseModel


class JobCreate(BaseModel):
    company_id: int
    title: str
    description: str | None = None
    location: str | None = None
    job_type: str | None = None
    experience: str | None = None
    salary: str | None = None
    required_skills: str | None = None
    qualifications: str | None = None
    responsibilities: str | None = None


class JobResponse(JobCreate):
    id: int
    status: str

    class Config:
        from_attributes = True