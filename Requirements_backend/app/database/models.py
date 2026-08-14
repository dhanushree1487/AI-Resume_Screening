from sqlalchemy import Column, Integer, String, Text, Float, DateTime
from sqlalchemy.sql import func

from .db import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String(150), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    location = Column(String(150))
    description = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    
    
class Recruiter(Base):
    __tablename__ = "recruiters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    company = Column(String(150), nullable=False)
    password = Column(String(255), nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, nullable=False)

    title = Column(String(150), nullable=False)
    description = Column(Text)

    location = Column(String(150))
    job_type = Column(String(50))
    experience = Column(String(100))
    salary = Column(String(100))

    required_skills = Column(Text)
    qualifications = Column(Text)
    responsibilities = Column(Text)

    status = Column(String(50), default="Open")
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)

    # Candidate ID comes from the other developer's candidate system
    candidate_id = Column(Integer, nullable=False)

    job_id = Column(Integer, nullable=False)
    resume_id = Column(Integer, nullable=True)

    status = Column(String(50), default="Applied")

    applied_at = Column(DateTime(timezone=True), server_default=func.now())


class MatchResult(Base):
    __tablename__ = "match_results"

    id = Column(Integer, primary_key=True, index=True)

    application_id = Column(Integer, nullable=False)

    match_score = Column(Float)
    matched_skills = Column(Text)
    missing_skills = Column(Text)

    ranking = Column(Integer, nullable=True)

    screening_result = Column(String(50), nullable=True)
    explanation = Column(Text, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())