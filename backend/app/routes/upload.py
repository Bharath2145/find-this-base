from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil

router = APIRouter()

UPLOAD_DIR = Path("uploads/screenshots")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/screenshot")
async def upload_screenshot(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "success": True,
        "filename": file.filename,
        "path": str(file_path)
    }