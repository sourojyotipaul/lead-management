from datetime import datetime
from enum import Enum

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class BudgetRange(str, Enum):
    UNDER_10K = "Under $10k"
    RANGE_10K_50K = "$10k-$50k"
    GREATER_50K = "Greater than $50k"


class LeadCreate(BaseModel):
    first_name: str = Field(..., min_length=1)
    last_name: str = Field(..., min_length=1)
    corporate_email: EmailStr
    company_name: str = Field(..., min_length=1)
    estimated_annual_budget: BudgetRange


class LeadResponse(LeadCreate):
    model_config = ConfigDict(from_attributes=True)

    lead_id: int
    created_at: datetime
