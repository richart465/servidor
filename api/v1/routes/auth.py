
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from cryptography.fernet import Fernet
from bson import ObjectId
from ..config.globals import Settings
from ..config.db_service import db
from ..config.jwt_service import write_jwt
from ..models.user import User
from ..schemas.user import userSchema


auth = APIRouter()
settings = Settings()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/")
fernet = Fernet(settings.PASSWORDS_ENCRYPTION_KEY)


@auth.post("/", status_code=status.HTTP_200_OK)
async def authentication(form_data: OAuth2PasswordRequestForm = Depends()):
    """ Check if user exists in database and generate jwt token
    Args:
        form_data (OAuth2PasswordRequestForm, optional): get username and password from form data. Defaults to Depends().
    Raises:
        HTTPException: a 401 error if user does not exist or password is incorrect
    Returns:
        JSON: a json object with the jwt token, refresh token and expiration time
    """

    user = db.gorda.users.find_one({"username": form_data.username})

    # Check if user exists in database
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")

    if fernet.decrypt(user["password"].encode('utf-8')).decode('utf-8') != form_data.password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect username or password")


    # Generate jwt token and refresh token
    token = write_jwt({"username": user["username"]}, days=30)

    return {"userId": str(user["_id"]), "access_token": token, "expiresIn": 3600}

@auth.post("/register", status_code=status.HTTP_200_OK)
async def register(user: User):
    """ Check if user exists in database, if not exists hash password, set s3 bucket,
    generate user cache folder then generate user pp, upload to s3 and finally delete cache folder.
    Args:
        user (User): User model schema from models.user
    Returns:
        _type_: JSONResponse with message and status code
    """

    if db.gorda.users.find_one({"username": user.username}):
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={"message": "User already exists"})

    user.password = fernet.encrypt(user.password.encode('utf-8')).decode('utf-8')

    # save user and create cache folder
    uid = db.gorda.users.insert_one(user.dict()).inserted_id
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=userSchema(db.gorda.users.find_one({"_id": ObjectId(uid)})))
