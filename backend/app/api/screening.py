from typing import List

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    HTTPException
)

from app.services.screening_service import screen_resumes


router = APIRouter(
    prefix="/api",
    tags=["Resume Screening"]
)


@router.post("/screen-resumes")
async def screen_resume_files(
    files: List[UploadFile] = File(...),
    job_description: str = Form(...)
):

    if not files:
        raise HTTPException(
            status_code=400,
            detail="At least one resume PDF is required."
        )

    if not job_description.strip():
        raise HTTPException(
            status_code=400,
            detail="Job description is required."
        )

    resume_files = []

    for file in files:

        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="A file was uploaded without a filename."
            )

        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(
                status_code=400,
                detail=f"{file.filename} is not a PDF file."
            )

        file_bytes = await file.read()

        if not file_bytes:
            raise HTTPException(
                status_code=400,
                detail=f"{file.filename} is empty."
            )

        resume_files.append({
            "filename": file.filename,
            "content": file_bytes
        })

    try:

        results = screen_resumes(
            resume_files=resume_files,
            job_description=job_description
        )

    except Exception as error:

        raise HTTPException(
            status_code=500,
            detail=f"Resume screening failed: {str(error)}"
        )

    return {
        "success": True,
        "job_description": job_description,
        "total_candidates": len(results),
        "candidates": results
    }