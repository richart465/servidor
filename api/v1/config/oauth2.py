from fastapi import Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from .jwt_service import validate_jwt
from .db_service import db
from ..models.user import User


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/")

def decode_token(token):
    token = validate_jwt(token, output=True)
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
            headers={"WWW-Authenticate": "Bearer"},
        )
    try:
        return User(**db.gorda.users.find_one({"username": token['username']}))
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired",
            headers={"WWW-Authenticate": "Bearer"},
        )

async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

async def validate_API_key(req: Request):
    """Check if exists a project with the given api-key

    Args:
        req (Request): the request object from the client

    Raises:
        HTTPException: if the api-key is not valid otherside return the api-key
    """
    try:
        api_key = req.headers['authorization'].split(' ')[1]
        # Check if exists a project with the given api-key
        project = db.neuri.projects.find_one({"api_key": api_key})
        if not project: raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid API key.")
        return api_key
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid API key.")