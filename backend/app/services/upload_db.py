from app.models.upload import Upload


def create_upload(db, contributor_id, filename):
    upload = Upload(
        contributor_id=contributor_id,
        filename=filename,
        status="pending",
    )

    db.add(upload)
    db.commit()
    db.refresh(upload)

    return upload