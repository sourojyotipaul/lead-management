from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database import init_db
from app.routers import leads


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title="Lead Distribution Portal", lifespan=lifespan)

app.include_router(leads.router)
