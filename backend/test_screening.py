import os
import re
from datetime import datetime

from app.parsers.pdf_parser import extract_text_from_pdf
from app.nlp.job_matcher import match_resume_to_job


# ============================================================
# JOB CONFIGURATION
# ============================================================

JOB_TITLE = "AI / Software Engineer"

JOB_DESCRIPTION = """
We are looking for an AI / Software Engineer.

Required technical skills:

Python
Java
JavaScript
TypeScript
React
Node.js
HTML
CSS
SQL
MySQL
MongoDB
Machine Learning
Deep Learning
Artificial Intelligence
Data Science
Data Analysis
Natural Language Processing
Computer Vision
TensorFlow
PyTorch
Scikit-learn
Pandas
NumPy
Git
GitHub
Docker
AWS
Azure
FastAPI
Django
"""


# ============================================================
# SCREENING WEIGHTS
# ============================================================

SKILL_WEIGHT = 0.60
EXPERIENCE_WEIGHT = 0.40

# Minimum experience expected for this job
REQUIRED_EXPERIENCE_YEARS = 2


# ============================================================
# RESUME DIRECTORY
# ============================================================

RESUME_DIRECTORY = "test_files"


# ============================================================
# GET CANDIDATE NAME
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

    return os.path.splitext(filename)[0]


# ============================================================
# PARSE DATE
# ============================================================

def parse_date(date_text):
    """
    Convert common resume date formats into datetime.

    Supported examples:

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
# EXTRACT EXPERIENCE
# ============================================================

def extract_experience_years(text):
    """
    Estimate professional experience from employment
    date ranges found in the resume.

    Examples:

    January 2021 - July 2024
    Jan 2021 - Present
    2021 - 2024
    March 2020 to December 2023
    """

    # Normalize different dash characters
    normalized_text = (
        text
        .replace("–", "-")
        .replace("—", "-")
        .replace("−", "-")
    )

    # --------------------------------------------------------
    # Common date formats
    # --------------------------------------------------------

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

        # ----------------------------------------------------
        # Start date
        # ----------------------------------------------------

        start_date = parse_date(start_text)

        if start_date is None:
            continue

        # ----------------------------------------------------
        # End date
        # ----------------------------------------------------

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

        # ----------------------------------------------------
        # Validate range
        # ----------------------------------------------------

        if end_date < start_date:
            continue

        months = (
            (end_date.year - start_date.year) * 12
            + (end_date.month - start_date.month)
        )

        # Avoid unrealistic date ranges
        if 0 <= months <= 600:

            total_months += months

    # --------------------------------------------------------
    # Convert months to years
    # --------------------------------------------------------

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
    Calculate experience score based on the required
    experience for the job.

    Example:

    0 years -> 0%
    1 year  -> 50%
    2 years -> 100%
    3+ years -> 100%
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
    Generate an explainable recruiter recommendation
    based on the candidate's score, skills and experience.
    """

    overall_score = candidate["overall_score"]
    skill_score = candidate["skill_score"]
    experience_years = candidate["experience_years"]
    experience_score = candidate["experience_score"]

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
    # Reason 1: ranking
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
    # Reason 2: skills
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
    # Reason 3: experience
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
            f"below the preferred {REQUIRED_EXPERIENCE_YEARS}+ years"
        )

    else:

        reasons.append(
            "No clear professional experience period "
            "was detected in the resume"
        )

    # --------------------------------------------------------
    # Reason 4: relevant skills
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
# FIND RESUMES
# ============================================================

if not os.path.exists(RESUME_DIRECTORY):

    print(
        f"\nERROR: Directory '{RESUME_DIRECTORY}' "
        "does not exist."
    )

    raise SystemExit


resume_files = [
    filename
    for filename in os.listdir(RESUME_DIRECTORY)
    if filename.lower().endswith(".pdf")
]


# ============================================================
# SCREEN CANDIDATES
# ============================================================

candidates = []


for filename in resume_files:

    resume_path = os.path.join(
        RESUME_DIRECTORY,
        filename
    )

    try:

        # ====================================================
        # STEP 1 — PDF TEXT EXTRACTION
        # ====================================================

        resume_text = extract_text_from_pdf(
            resume_path
        )

        # ====================================================
        # STEP 2 — CANDIDATE NAME
        # ====================================================

        candidate_name = get_candidate_name(
            resume_text,
            filename
        )

        # ====================================================
        # STEP 3 — EXPERIENCE EXTRACTION
        # ====================================================

        experience_years = extract_experience_years(
            resume_text
        )

        # ====================================================
        # STEP 4 — EXPERIENCE SCORE
        # ====================================================

        experience_score = calculate_experience_score(
            experience_years
        )

        # ====================================================
        # STEP 5 — SKILL MATCHING
        # ====================================================

        result = match_resume_to_job(
            resume_text,
            JOB_DESCRIPTION
        )

        skill_score = float(
            result["match_score"]
        )

        # ====================================================
        # STEP 6 — OVERALL SCORE
        # ====================================================

        overall_score = (
            skill_score * SKILL_WEIGHT
            +
            experience_score * EXPERIENCE_WEIGHT
        )

        overall_score = round(
            overall_score,
            2
        )

        # ====================================================
        # STORE CANDIDATE
        # ====================================================

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
                result["matched_skills"],

            "missing_skills":
                result["missing_skills"],
        })

    except Exception as error:

        print(
            f"\nERROR processing "
            f"{filename}: {error}"
        )


# ============================================================
# SORT / RANK
# ============================================================

candidates.sort(
    key=lambda candidate:
        candidate["overall_score"],
    reverse=True
)


# ============================================================
# MAIN HEADER
# ============================================================

print("\n")

print("=" * 80)

print(
    "                    AI RESUME SCREENING SYSTEM"
)

print("=" * 80)


# ============================================================
# JOB INFORMATION
# ============================================================

print("\nJOB ROLE")
print("-" * 80)

print(JOB_TITLE)


print("\nSCREENING CRITERIA")
print("-" * 80)

print(
    "Technical Skills Match : 60%"
)

print(
    "Professional Experience: 40%"
)

print(
    f"Required Experience    : "
    f"{REQUIRED_EXPERIENCE_YEARS}+ years"
)


print(
    "\nResumes automatically detected: "
    f"{len(resume_files)}"
)


# ============================================================
# CANDIDATE RANKING
# ============================================================

print("\n")

print("=" * 80)

print(
    "                       CANDIDATE RANKING"
)

print("=" * 80)


if not candidates:

    print(
        "\nNo PDF resumes found in "
        "backend/test_files/"
    )

else:

    total_candidates = len(candidates)

    for rank, candidate in enumerate(
        candidates,
        start=1
    ):

        # ----------------------------------------------------
        # Ranking symbol
        # ----------------------------------------------------

        if rank == 1:

            position = "🥇"

        elif rank == 2:

            position = "🥈"

        elif rank == 3:

            position = "🥉"

        else:

            position = f"{rank}."

        # ----------------------------------------------------
        # Candidate header
        # ----------------------------------------------------

        print("\n")

        print(
            f"{position} {candidate['name']}"
        )

        print(
            f"   Resume: "
            f"{candidate['filename']}"
        )

        # ----------------------------------------------------
        # Overall score
        # ----------------------------------------------------

        print(
            f"\n   ⭐ OVERALL SCORE: "
            f"{candidate['overall_score']}%"
        )

        print(
            f"   Technical Skills Match: "
            f"{candidate['skill_score']}%"
        )

        print(
            f"   Experience: "
            f"{candidate['experience_years']} years"
        )

        print(
            f"   Experience Match: "
            f"{candidate['experience_score']}%"
        )

        # ----------------------------------------------------
        # Key matched skills
        # ----------------------------------------------------

        print(
            "\n   KEY MATCHED SKILLS"
        )

        matched_skills = candidate[
            "matched_skills"
        ]

        # Show only the first 8
        visible_skills = matched_skills[:8]

        if visible_skills:

            for skill in visible_skills:

                print(
                    f"   ✓ {skill}"
                )

            if len(matched_skills) > 8:

                remaining = (
                    len(matched_skills) - 8
                )

                print(
                    f"   + {remaining} more matched skills"
                )

        else:

            print(
                "   No matching technical skills detected"
            )

        # ----------------------------------------------------
        # AI recommendation
        # ----------------------------------------------------

        recommendation, reasons = (
            generate_recommendation(
                candidate,
                rank,
                total_candidates
            )
        )

        print(
            "\n   🤖 AI RECOMMENDATION"
        )

        if recommendation == "RECOMMENDED":

            print(
                "   ✓ RECOMMENDED"
            )

        elif recommendation == "STRONG CANDIDATE":

            print(
                "   ✓ STRONG CANDIDATE"
            )

        elif recommendation == "CONSIDER":

            print(
                "   ~ CONSIDER"
            )

        else:

            print(
                "   ! FURTHER REVIEW"
            )

        print(
            "\n   WHY?"
        )

        for reason in reasons:

            print(
                f"   • {reason}"
            )

        print(
            "\n" + "-" * 80
        )


# ============================================================
# TOP CANDIDATE SUMMARY
# ============================================================

if candidates:

    top_candidate = candidates[0]

    top_recommendation, top_reasons = (
        generate_recommendation(
            top_candidate,
            1,
            len(candidates)
        )
    )

    print("\n")

    print("=" * 80)

    print(
        "                    FINAL AI RECOMMENDATION"
    )

    print("=" * 80)

    print(
        f"\nRecommended Candidate:"
    )

    print(
        f"  {top_candidate['name']}"
    )

    print(
        f"\nOverall Score:"
    )

    print(
        f"  {top_candidate['overall_score']}%"
    )

    print(
        f"\nRecommendation:"
    )

    print(
        f"  {top_recommendation}"
    )

    print(
        "\nWhy this candidate?"
    )

    for reason in top_reasons:

        print(
            f"  • {reason}"
        )

    print(
        "\nKey strengths:"
    )

    for skill in top_candidate[
        "matched_skills"
    ][:8]:

        print(
            f"  ✓ {skill}"
        )


# ============================================================
# SCREENING SUMMARY
# ============================================================

print("\n")

print("=" * 80)

print(
    "                         SCREENING SUMMARY"
)

print("=" * 80)

print(
    f"\nTotal Resumes Analyzed: "
    f"{len(candidates)}"
)

if candidates:

    print(
        f"Top Candidate: "
        f"{candidates[0]['name']}"
    )

    print(
        f"Top Overall Score: "
        f"{candidates[0]['overall_score']}%"
    )

    print(
        f"Top Skills Score: "
        f"{candidates[0]['skill_score']}%"
    )

    print(
        f"Top Candidate Experience: "
        f"{candidates[0]['experience_years']} years"
    )

print("\n")

print("=" * 80)

print(
    "                  END OF AI SCREENING REPORT"
)

print("=" * 80)

print()