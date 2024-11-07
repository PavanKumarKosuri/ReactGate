from sqlalchemy import Column, Integer, String
from config.db import Base

class User(Base):
    __tablename__ = 'userProfiles'

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    username = Column(String(50), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    emp_id = Column(String(20))
    email = Column(String(100))
    phone_number = Column(String(20))
