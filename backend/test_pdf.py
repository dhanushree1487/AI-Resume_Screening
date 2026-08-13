from app.parsers.pdf_parser import extract_text_from_pdf


file_path = "test_files/resume.pdf"

text = extract_text_from_pdf(file_path)

print("========== EXTRACTED RESUME TEXT ==========")
print(text)
print("============================================")