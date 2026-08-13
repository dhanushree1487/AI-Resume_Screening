import spacy
import re

nlp = spacy.load("en_core_web_sm")


# Skills for our recruitment system
SKILLS = [
    # Programming
    "python",
    "java",
    "c++",
    "javascript",
    "typescript",
    "html",
    "css",

    # Web / Backend
    "react",
    "angular",
    "node.js",
    "fastapi",
    "django",
    "flask",

    # Databases
    "sql",
    "mysql",
    "postgresql",
    "mongodb",

    # AI / ML
    "machine learning",
    "deep learning",
    "artificial intelligence",
    "data science",
    "data analysis",
    "natural language processing",
    "computer vision",
    "tensorflow",
    "pytorch",
    "scikit-learn",
    "pandas",
    "numpy",

    # Tools
    "git",
    "github",
    "docker",
    "aws",
    "azure",
    "power bi",
    "tableau",

    # Business / Operations
    "inventory management",
    "supply chain",
    "logistics",
    "warehousing",
    "warehouse operations",
    "shipping",
    "packing",
    "picking",
    "record keeping",
    "quality control",
    "kanban",
    "5s",
    "kaizen",
    "gemba",
    "cleaning equipment",
    "deep sanitation practices",
    "mathematics",
]


def extract_skills(text):
    """
    Extract skills from resume text.
    """

    text_lower = text.lower()

    found_skills = []

    for skill in SKILLS:

        # Escape special characters such as + and .
        pattern = r"(?<!\w)" + re.escape(skill.lower()) + r"(?!\w)"

        if re.search(pattern, text_lower):
            found_skills.append(skill)

    return sorted(set(found_skills))