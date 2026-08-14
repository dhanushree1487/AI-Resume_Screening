from fastapi import FastAPI
from app.database.db import Base, engine
from app.database import models
from app.routes.company import router as company_router
from app.routes.recruiter import router as recruiter_router
from app.routes.job import router as job_router
app = FastAPI(
    title="AI-Powered Recruitment Platform",
    description="Backend for company job management, AI screening, matching, scoring and candidate ranking",
    version="1.0.0"
)
Base.metadata.create_all(bind=engine)
app.include_router(company_router)
app.include_router(recruiter_router)
app.include_router(job_router)
@app.get("/")
def home():
    return {
        "message": "AI-Powered Recruitment Platform Backend is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }