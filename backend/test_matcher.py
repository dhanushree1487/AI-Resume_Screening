from app.parsers.pdf_parser import extract_text_from_pdf
from app.nlp.job_matcher import match_resume_to_job


# Read the resume
resume_path = "test_files/resume.pdf"

resume_text = extract_text_from_pdf(resume_path)


# Sample job description
job_description = """
We are looking for an Operations Associate.

Required skills:

Inventory Management
Supply Chain
Warehousing
quality Control
Packing
Shipping
Python
SQL
Docker
AWS
"""


# Match resume with job
result = match_resume_to_job(
    resume_text,
    job_description
)


print("\n========== RESUME JOB MATCH ==========")

print("\nMatch Score:", result["match_score"], "%")

print("\nMatched Skills:")
for skill in result["matched_skills"]:
    print("✓", skill)

print("\nMissing Skills:")
for skill in result["missing_skills"]:
    print("✗", skill)

print("\n=======================================")