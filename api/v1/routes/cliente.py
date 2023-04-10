
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from ..config.db_service import db
from ..models.client import NewClient
from datetime import datetime, timedelta
from ..config.oauth2 import get_current_active_user


cliente = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/")


@cliente.post("/")
async def create_new_client(new_cliente: NewClient, token: str = Depends(get_current_active_user)):
    """Inserta un nuevo cliente en la base de datos.

    Args:
        new_cliente (NewClient): _description_
    """
    # set new fechadePago to 30 days from now
    new_cliente.proximaFechaPago = datetime.now() + timedelta(days=30)

    # insert new client in db
    db.gorda.clientes.insert_one(new_cliente.dict()).inserted_id

    return JSONResponse(status_code=status.HTTP_201_CREATED, content={"message": "Cliente creado exitosamente"})
