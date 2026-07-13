# Lead Management Tool

Single-page lead distribution portal with:
- FastAPI backend (SQLite)
- React + Vite + Tailwind frontend

## Prerequisites

- Python 3.10 or newer
- Node.js 22.12+ recommended
- npm 10+

## Project Structure

- backend: FastAPI app, API routes, SQLite initialization
- frontend: React dashboard app

## Backend Setup And Run

1. Open terminal at repository root.
2. Run:

	cd backend
	python -m venv venv
	.\venv\Scripts\Activate.ps1
	pip install -r requirements.txt
	uvicorn app.main:app --reload

3. Backend will be available at:
	http://localhost:8000

4. API docs will be available at:
	http://localhost:8000/docs

Notes:
- SQLite DB file is auto-created at startup if missing.
- leads table is auto-created at startup if missing.

## Frontend Setup And Run

1. Open a new terminal at repository root.
2. Run:

	cd frontend
	npm install
	npm run dev

3. Frontend will be available at:
	http://localhost:5173

Notes:
- Frontend uses Vite proxy for /leads to http://localhost:8000.
- Keep backend running while using frontend.

## Available Backend Endpoints

- GET /leads
  Returns all leads.
- POST /leads
  Creates a lead.
- GET /leads/{lead_id}
  Returns one lead by lead_id.

## Quick Smoke Test

1. Start backend.
2. Start frontend.
3. Open http://localhost:5173.
4. Add a lead from the modal.
5. Verify the table and dashboard tiles update.
