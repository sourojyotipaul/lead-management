from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud
from app.database import get_db
from app.schemas import LeadCreate, LeadResponse

router = APIRouter(prefix="/leads", tags=["leads"])


@router.post("", response_model=LeadResponse, status_code=status.HTTP_201_CREATED)
def add_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    """Validate and store a new lead, returning the record that was created."""
    return crud.create_lead(db, lead)


@router.get("/{lead_id}", response_model=LeadResponse)
def get_lead_by_id(lead_id: int, db: Session = Depends(get_db)):
    """Return a single lead by its auto-generated lead_id."""
    db_lead = crud.get_lead(db, lead_id)
    if db_lead is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Lead not found")
    return db_lead


@router.get("", response_model=list[LeadResponse])
def get_all_leads(db: Session = Depends(get_db)):
    """Return every lead currently stored."""
    return crud.get_all_leads(db)
