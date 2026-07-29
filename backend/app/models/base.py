import uuid

from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import UUID

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