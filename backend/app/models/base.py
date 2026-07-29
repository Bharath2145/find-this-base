import uuid
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database.database import Base


class BaseLayout(Base):
    __tablename__ = "bases"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    th_level = Column(Integer, nullable=False)

    base_link = Column(String, nullable=True)

    layout_hash = Column(
        String,
        unique=True,
        nullable=False,
    )

    attacks = relationship(
        "Attack",
        back_populates="base",
        cascade="all, delete-orphan",
    )

    fingerprint = relationship(
        "Fingerprint",
        back_populates="base",
        uselist=False,
        cascade="all, delete-orphan",
    )