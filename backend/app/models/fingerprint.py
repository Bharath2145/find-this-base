import uuid

from sqlalchemy import Column, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database.database import Base


class Fingerprint(Base):
    __tablename__ = "fingerprints"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    base_id = Column(
        UUID(as_uuid=True),
        ForeignKey("bases.id"),
        unique=True,
        nullable=False,
    )

    base = relationship(
        "BaseLayout",
        back_populates="fingerprint",
    )