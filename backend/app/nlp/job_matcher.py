from app.nlp.skill_extractor import extract_skills


def match_resume_to_job(resume_text, job_description):
    """
    Compare resume skills with the skills required by a job.
    """

    # Extract skills from both texts
    resume_skills = set(extract_skills(resume_text))
    required_skills = set(extract_skills(job_description))

    # Find matched and missing skills
    matched_skills = resume_skills.intersection(required_skills)
    missing_skills = required_skills - resume_skills

    # Calculate match percentage
    if required_skills:
        match_score = (len(matched_skills) / len(required_skills)) * 100
    else:
        match_score = 0

    return {
        "match_score": round(match_score, 2),
        "matched_skills": sorted(matched_skills),
        "missing_skills": sorted(missing_skills),
    }