from sqlalchemy.orm import Session

from app.models import Lead
from app.schemas import LeadCreate


def create_lead(db: Session, lead: LeadCreate) -> Lead:
    db_lead = Lead(
        first_name=lead.first_name,
        last_name=lead.last_name,
        corporate_email=lead.corporate_email,
        company_name=lead.company_name,
        estimated_annual_budget=lead.estimated_annual_budget.value,
    )
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead


def get_lead(db: Session, lead_id: int) -> Lead | None:
    return db.get(Lead, lead_id)


def get_all_leads(db: Session) -> list[Lead]:
    return db.query(Lead).order_by(Lead.lead_id).all()
