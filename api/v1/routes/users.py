
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from cryptography.fernet import Fernet
from bson import ObjectId
from ..config.globals import Settings
from ..config.db_service import db
from ..config.jwt_service import write_jwt
from ..config.oauth2 import get_current_active_user
from ..models.user import User


users = APIRouter()
settings = Settings()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/")
fernet = Fernet(settings.PASSWORDS_ENCRYPTION_KEY)

@users.post("/")
async def create_new_user(new_user: User, current_user: User = Depends(get_current_active_user)):
    return JSONResponse(status_code=status.HTTP_201_CREATED, content={"message": "Contrato creado exitosamente"})

@users.get("/")
async def get_user():
    """Get user information.

    Returns:
        _type_: _description_
    """

@users.put("/")
async def update_user():
    return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "Contrato actualizado exitosamente"})