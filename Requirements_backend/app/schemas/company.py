from pydantic import BaseModel


class CompanyCreate(BaseModel):
    company_name: str
    email: str
    location: str | None = None
    description: str | None = None


class CompanyResponse(CompanyCreate):
    id: int

    class Config:
        from_attributes = True