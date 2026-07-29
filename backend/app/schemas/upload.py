from pydantic import BaseModel
from uuid import UUID


class UploadResponse(BaseModel):
    upload_id: UUID
    status: str