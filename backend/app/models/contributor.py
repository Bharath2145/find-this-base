import uuid

from sqlalchemy import Column, String, Integer
from sqlalchemy.dialects.postgresql import UUID

from app.database.database import Base


class Contributor(Base):
    __tablename__ = "contributors"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    username = Column(
        String(50),
        unique=True,
        nullable=False,
    )

    email = Column(
        String(255),
        unique=True,
        nullable=False,
    )

    reputation = Column(
        Integer,
        default=0,
        nullable=False,
    )