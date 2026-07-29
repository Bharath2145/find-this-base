import uuid
from pathlib import Path
from fastapi import UploadFile

UPLOAD_DIR = Path("uploads/screenshots")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


def save_upload(file: UploadFile):
    upload_id = uuid.uuid4()

    filename = f"{upload_id}_{file.filename}"

    filepath = UPLOAD_DIR / filename

    with open(filepath, "wb") as buffer:
        buffer.write(file.file.read())

    return upload_id, filepath