from app.parsers.pdf_parser import extract_text_from_pdf
from app.nlp.skill_extractor import extract_skills


# Read the resume
resume_path = "test_files/resume.pdf"

text = extract_text_from_pdf(resume_path)

# Extract skills
skills = extract_skills(text)

print("\n========== EXTRACTED SKILLS ==========")

for skill in skills:
    print("✓", skill)

print("=======================================")