import os
from pydantic import BaseSettings


class Settings(BaseSettings):
    MONGODB_URL: str = os.getenv("UVICORN_MONGODB_URL")
    SECRET_KEY: str = os.getenv("UVICORN_SECRET_KEY")
    PASSWORDS_ENCRYPTION_KEY: str = os.getenv("UVICORN_PASSWORDS_ENCRYPTION_KEY")
    WEBCLIENT: str = os.getenv("UVICORN_HOST")
    ACCESS_TOKEN_EXPIRE: int = int(os.getenv("UVICORN_ACCESS_TOKEN_EXPIRE_DAYS"))
    APP_MODE: str = os.getenv("UVICORN_MODE")

