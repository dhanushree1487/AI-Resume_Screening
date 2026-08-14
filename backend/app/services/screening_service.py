import io
import re
from datetime import datetime
from typing import List, Dict, Any

from app.parsers.pdf_parser import extract_text_from_pdf
from app.nlp.job_matcher import match_resume_to_job


# ============================================================
# SCREENING WEIGHTS
# ============================================================

SKILL_WEIGHT = 0.60
EXPERIENCE_WEIGHT = 0.40

# Minimum experience expected for the job
REQUIRED_EXPERIENCE_YEARS = 2


# ============================================================
# PARSE DATE
# ============================================================

def parse_date(date_text):
    """
    Convert common resume date formats into datetime.

    Supported:
    January 2021
    Jan 2021
    2021
    """

    date_text = date_text.strip()

    formats = [
        "%B %Y",
        "%b %Y",
        "%Y",
    ]

    for date_format in formats:

        try:
            return datetime.strptime(
                date_text,
                date_format
            )

        except ValueError:
            continue

    return None


# ============================================================
# EXTRACT CANDIDATE NAME
# ============================================================

def get_candidate_name(text, filename):
    """
    Get the first meaningful line from the resume.

    If no text is available, use the filename.
    """

    lines = [
        line.strip()
        for line in text.splitlines()
        if line.strip()
    ]

    if lines:
        return lines[0]

    return filename.rsplit(".", 1)[0]


# ============================================================
# EXTRACT EXPERIENCE
# ============================================================

def extract_experience_years(text):
    """
    Estimate professional experience from date ranges
    found in the resume.

    Examples:

    January 2021 - July 2024
    Jan 2021 - Present
    2021 - 2024
    March 2020 to December 2023
    """

    normalized_text = (
        text
        .replace("–", "-")
        .replace("—", "-")
        .replace("−", "-")
    )

    month_names = (
        "January|February|March|April|May|June|July|"
        "August|September|October|November|December|"
        "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|"
        "Oct|Nov|Dec"
    )

    date_pattern = (
        rf"(?:"
        rf"(?:{month_names})\s+\d{{4}}"
        rf"|"
        rf"\d{{4}}"
        rf")"
    )

    end_pattern = (
        rf"(?:"
        rf"Present|Current|Now"
        rf"|"
        rf"{date_pattern}"
        rf")"
    )

    range_pattern = (
        rf"({date_pattern})"
        rf"\s*(?:-|to)\s*"
        rf"({end_pattern})"
    )

    matches = re.finditer(
        range_pattern,
        normalized_text,
        re.IGNORECASE
    )

    total_months = 0
    current_date = datetime.now()

    for match in matches:

        start_text = match.group(1).strip()
        end_text = match.group(2).strip()

        start_date = parse_date(start_text)

        if start_date is None:
            continue

        if end_text.lower() in (
            "present",
            "current",
            "now",
        ):
            end_date = current_date

        else:
            end_date = parse_date(end_text)

        if end_date is None:
            continue

        if end_date < start_date:
            continue

        months = (
            (end_date.year - start_date.year) * 12
            + (end_date.month - start_date.month)
        )

        if 0 <= months <= 600:
            total_months += months

    experience_years = total_months / 12

    return round(
        experience_years,
        1
    )


# ============================================================
# EXPERIENCE SCORE
# ============================================================

def calculate_experience_score(experience_years):
    """
    Calculate experience score based on required experience.
    """

    if experience_years <= 0:
        return 0.0

    score = (
        experience_years
        / REQUIRED_EXPERIENCE_YEARS
    ) * 100

    return round(
        min(score, 100),
        2
    )


# ============================================================
# GENERATE RECOMMENDATION
# ============================================================

def generate_recommendation(
    candidate,
    rank,
    total_candidates
):
    """
    Generate an explainable recruiter recommendation.
    """

    overall_score = candidate["overall_score"]
    skill_score = candidate["skill_score"]
    experience_years = candidate["experience_years"]
    matched_skills = candidate["matched_skills"]

    reasons = []

    # --------------------------------------------------------
    # Recommendation category
    # --------------------------------------------------------

    if rank == 1 and overall_score >= 70:

        recommendation = "RECOMMENDED"

    elif overall_score >= 70:

        recommendation = "STRONG CANDIDATE"

    elif overall_score >= 55:

        recommendation = "CONSIDER"

    else:

        recommendation = "FURTHER REVIEW"

    # --------------------------------------------------------
    # Ranking reason
    # --------------------------------------------------------

    if rank == 1 and total_candidates > 1:

        reasons.append(
            "Highest overall match among the analyzed candidates"
        )

    elif rank <= 3:

        reasons.append(
            f"Ranked #{rank} based on the overall screening score"
        )

    # --------------------------------------------------------
    # Skills reason
    # --------------------------------------------------------

    if skill_score >= 80:

        reasons.append(
            f"Excellent technical skill match ({skill_score}%)"
        )

    elif skill_score >= 60:

        reasons.append(
            f"Good technical skill match ({skill_score}%)"
        )

    elif skill_score >= 40:

        reasons.append(
            f"Moderate technical skill match ({skill_score}%)"
        )

    else:

        reasons.append(
            f"Limited technical skill match ({skill_score}%)"
        )

    # --------------------------------------------------------
    # Experience reason
    # --------------------------------------------------------

    if experience_years >= REQUIRED_EXPERIENCE_YEARS:

        reasons.append(
            f"Has {experience_years} years of experience "
            f"and meets the {REQUIRED_EXPERIENCE_YEARS}+ "
            f"year requirement"
        )

    elif experience_years > 0:

        reasons.append(
            f"Has {experience_years} years of experience, "
            f"below the preferred "
            f"{REQUIRED_EXPERIENCE_YEARS}+ years"
        )

    else:

        reasons.append(
            "No clear professional experience period "
            "was detected in the resume"
        )

    # --------------------------------------------------------
    # Matched skills reason
    # --------------------------------------------------------

    if len(matched_skills) >= 5:

        reasons.append(
            f"Demonstrates {len(matched_skills)} relevant "
            "technical skills"
        )

    elif len(matched_skills) > 0:

        reasons.append(
            f"Demonstrates {len(matched_skills)} "
            "relevant technical skill(s)"
        )

    else:

        reasons.append(
            "Few or no relevant technical skills were detected"
        )

    return recommendation, reasons


# ============================================================
# SCREEN RESUMES
# ============================================================

def screen_resumes(
    resume_files: List[Dict[str, Any]],
    job_description: str
):
    """
    Main screening function used by the FastAPI endpoint.

    resume_files format:

    [
        {
            "filename": "resume1.pdf",
            "content": b"..."
        }
    ]

    Returns ranked candidate results.
    """

    candidates = []

    # --------------------------------------------------------
    # PROCESS EACH RESUME
    # --------------------------------------------------------

    for resume_file in resume_files:

        filename = resume_file["filename"]
        content = resume_file["content"]

        try:

            # ------------------------------------------------
            # PDF TEXT EXTRACTION
            # ------------------------------------------------

            # The existing PDF parser expects a file path.
            # Create a temporary PDF file for processing.

            import tempfile

            with tempfile.NamedTemporaryFile(
                suffix=".pdf",
                delete=False
            ) as temp_file:

                temp_file.write(content)
                temp_path = temp_file.name

            try:

                resume_text = extract_text_from_pdf(
                    temp_path
                )

            finally:

                import os
                os.unlink(temp_path)

            # ------------------------------------------------
            # CANDIDATE NAME
            # ------------------------------------------------

            candidate_name = get_candidate_name(
                resume_text,
                filename
            )

            # ------------------------------------------------
            # EXPERIENCE
            # ------------------------------------------------

            experience_years = extract_experience_years(
                resume_text
            )

            experience_score = calculate_experience_score(
                experience_years
            )

            # ------------------------------------------------
            # SKILL MATCHING
            # ------------------------------------------------

            result = match_resume_to_job(
                resume_text,
                job_description
            )

            skill_score = float(
                result["match_score"]
            )

            # ------------------------------------------------
            # OVERALL SCORE
            # ------------------------------------------------

            overall_score = (
                skill_score * SKILL_WEIGHT
                +
                experience_score * EXPERIENCE_WEIGHT
            )

            overall_score = round(
                overall_score,
                2
            )

            # ------------------------------------------------
            # STORE RESULT
            # ------------------------------------------------

            candidates.append({

                "name": candidate_name,

                "filename": filename,

                "experience_years":
                    experience_years,

                "experience_score":
                    experience_score,

                "skill_score":
                    skill_score,

                "overall_score":
                    overall_score,

                "matched_skills":
                    result.get(
                        "matched_skills",
                        []
                    ),

            })

        except Exception as error:

            # Don't crash the entire screening process
            # because one resume failed.

            candidates.append({

                "name":
                    filename.rsplit(".", 1)[0],

                "filename":
                    filename,

                "experience_years":
                    0,

                "experience_score":
                    0,

                "skill_score":
                    0,

                "overall_score":
                    0,

                "matched_skills":
                    [],

                "error":
                    str(error),

            })

    # --------------------------------------------------------
    # SORT CANDIDATES
    # --------------------------------------------------------

    candidates.sort(
        key=lambda candidate:
            candidate["overall_score"],
        reverse=True
    )

    # --------------------------------------------------------
    # ADD RANK + RECOMMENDATION
    # --------------------------------------------------------

    total_candidates = len(candidates)

    for rank, candidate in enumerate(
        candidates,
        start=1
    ):

        recommendation, reasons = (
            generate_recommendation(
                candidate,
                rank,
                total_candidates
            )
        )

        candidate["rank"] = rank

        candidate["recommendation"] = (
            recommendation
        )

        candidate["reasons"] = reasons

    return candidates