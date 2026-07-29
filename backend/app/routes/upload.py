from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.upload import Upload
from app.schemas.upload import UploadResponse
from app.services.upload_service import save_upload
from app.workers.process_upload import process_upload
router = APIRouter()


@router.post(
    "/screenshot",
    response_model=UploadResponse,
)
async def upload_screenshot(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    upload_id, filepath = save_upload(file)

    upload = Upload(
        id=upload_id,
        contributor_id=None,
        original_filename=file.filename,
        stored_filename=filepath.name,
        status="pending",
    )

    db.add(upload)
    db.commit()
    db.refresh(upload)
    process_upload(db, upload.id)

    return UploadResponse(
        upload_id=upload.id,
        status=upload.status,
    )