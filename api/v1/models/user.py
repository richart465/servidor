from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from ..config.globals import Settings
settings = Settings()


class User(BaseModel):
    name: str
    lastName: str
    username: str
    password: str
    disabled: Optional[bool] = False
    created_at: Optional[datetime] = datetime.now()
    role: int = 1 # role 0 = admin | 1 = user