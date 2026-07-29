import uuid

from sqlalchemy import Column, String, ForeignKey
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
        nullable=False,
    )

    filename = Column(
        String(255),
        nullable=False,
    )

    status = Column(
        String(50),
        nullable=False,
        default="pending",
    )

    contributor = relationship(
        "Contributor",
        back_populates="uploads",
    )