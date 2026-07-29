from fastapi import APIRouter, UploadFile, File

from app.schemas.upload import UploadResponse
from app.services.upload_service import save_upload

router = APIRouter()


@router.post(
    "/screenshot",
    response_model=UploadResponse,
)
async def upload_screenshot(
    file: UploadFile = File(...)
):
    upload_id, _ = save_upload(file)

    return UploadResponse(
        upload_id=upload_id,
        status="processing",
    )