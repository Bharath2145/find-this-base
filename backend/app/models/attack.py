import uuid

from sqlalchemy import Column, String, Integer, Float, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database.database import Base


class Attack(Base):
    __tablename__ = "attacks"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    base_id = Column(
        UUID(as_uuid=True),
        ForeignKey("bases.id"),
        nullable=False,
    )

    video_id = Column(
        UUID(as_uuid=True),
        ForeignKey("videos.id"),
        nullable=False,
    )

    army = Column(String(150), nullable=False)

    stars = Column(Integer, nullable=False)

    destruction = Column(Float, nullable=False)

    timestamp = Column(Integer, nullable=False)

    base = relationship(
        "BaseLayout",
        back_populates="attacks",
    )

    video = relationship(
        "Video",
        back_populates="attacks",
    )