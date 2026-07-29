import uuid
from datetime import datetime

from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database.database import Base


class Upload(Base):
    __tablename__ = "uploads"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    contributor_id = Column(
        UUID(as_uuid=True),
        ForeignKey("contributors.id"),
        nullable=True,
    )

    original_filename = Column(
        String(255),
        nullable=False,
    )

    stored_filename = Column(
        String(255),
        nullable=False,
    )

    status = Column(
        String(50),
        default="pending",
        nullable=False,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    contributor = relationship(
        "Contributor",
        back_populates="uploads",
    )