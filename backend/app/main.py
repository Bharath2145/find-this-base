from fastapi import FastAPI

from app.database.database import Base, engine
from app.routes.upload import router as upload_router

import app.models.base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="People's COC API",
    version="1.0.0",
)

app.include_router(
    upload_router,
    prefix="/api/upload",
    tags=["Upload"],
)


@app.get("/")
def root():
    return {
        "status": "running",
        "message": "People's COC Backend 🚀",
    }