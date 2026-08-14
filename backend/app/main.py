from fastapi import FastAPI

from app.api.screening import router as screening_router


app = FastAPI(
    title="AI Resume Screening API",
    description="AI-powered resume analysis and candidate ranking system",
    version="1.0.0"
)


app.include_router(screening_router)


@app.get("/")
def root():
    return {
        "message": "AI Resume Screening API is running",
        "status": "success"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }