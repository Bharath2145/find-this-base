from sqlalchemy.orm import Session

from app.models.upload import Upload


def process_upload(db: Session, upload_id):
    upload = db.get(Upload, upload_id)

    if upload is None:
        return

    upload.status = "processing"
    db.commit()

    # OpenCV / YOLO will go here

    upload.status = "completed"
    db.commit()