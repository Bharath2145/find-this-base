import uuid

from sqlalchemy import Column, String, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database.database import Base


class Video(Base):
    __tablename__ = "videos"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    youtube_id = Column(
        String(50),
        unique=True,
        nullable=True,
    )

    title = Column(
        String(255),
        nullable=False,
    )

    channel_name = Column(
        String(255),
        nullable=True,
    )

    duration = Column(Integer)

    source = Column(
        String(50),
        default="community",
    )

    attacks = relationship(
        "Attack",
        back_populates="video",
        cascade="all, delete-orphan",
    )