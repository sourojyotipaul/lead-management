from sqlalchemy import Column, DateTime, Integer, String, func

from app.database import Base


class Lead(Base):
    __tablename__ = "leads"

    lead_id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    corporate_email = Column(String, nullable=False)
    company_name = Column(String, nullable=False)
    estimated_annual_budget = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
