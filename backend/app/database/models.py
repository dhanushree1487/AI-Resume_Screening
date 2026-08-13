from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)

    candidate_profile = relationship(
        "Candidate",
        back_populates="user",
        uselist=False
    )

    company = relationship(
        "Company",
        back_populates="user",
        uselist=False
    )


class Candidate(Base):
    __tablename__ = "candidates"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    education = Column(Text)
    skills = Column(Text)
    experience = Column(Text)
    projects = Column(Text)
    resume_path = Column(String)

    user = relationship(
        "User",
        back_populates="candidate_profile"
    )

    applications = relationship(
        "Application",
        back_populates="candidate"
    )


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    company_name = Column(String, nullable=False)
    description = Column(Text)

    user = relationship(
        "User",
        back_populates="company"
    )

    jobs = relationship(
        "Job",
        back_populates="company"
    )


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"), nullable=False)

    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    required_skills = Column(Text)
    experience_required = Column(String)
    location = Column(String)
    status = Column(String, default="OPEN")

    company = relationship(
        "Company",
        back_populates="jobs"
    )

    applications = relationship(
        "Application",
        back_populates="job"
    )


class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)

    candidate_id = Column(
        Integer,
        ForeignKey("candidates.id"),
        nullable=False
    )

    job_id = Column(
        Integer,
        ForeignKey("jobs.id"),
        nullable=False
    )

    status = Column(String, default="APPLIED")
    applied_at = Column(DateTime, default=datetime.utcnow)

    candidate = relationship(
        "Candidate",
        back_populates="applications"
    )

    job = relationship(
        "Job",
        back_populates="applications"
    )

    screening_result = relationship(
        "ScreeningResult",
        back_populates="application",
        uselist=False
    )


class ScreeningResult(Base):
    __tablename__ = "screening_results"

    id = Column(Integer, primary_key=True, index=True)

    application_id = Column(
        Integer,
        ForeignKey("applications.id"),
        nullable=False
    )

    match_score = Column(Integer)
    matched_skills = Column(Text)
    missing_skills = Column(Text)
    recommendation = Column(String)

    application = relationship(
        "Application",
        back_populates="screening_result"
    )