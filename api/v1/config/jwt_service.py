from fastapi.responses import JSONResponse
from jwt import encode, decode
from jwt import exceptions
from datetime import datetime, timedelta
from .globals import Settings

settings = Settings()


def expiry_time(days: int = 0, hours: int = 0, minutes: int = 0, seconds: int = 0):
	date = datetime.now() + timedelta(days=days, hours=hours, minutes=minutes, seconds=seconds)
	return date

def write_jwt(data: dict, days: int = 0, hours: int = 0, minutes: int = 0, seconds: int = 0):
	return encode(payload={**data, 'exp': expiry_time(days=days, hours=hours, minutes=minutes, seconds=seconds)}, key=settings.SECRET_KEY, algorithm='HS256')

def validate_jwt(token: str, output: bool = False):
	try:
		if output:
			return decode(token, key=settings.SECRET_KEY, algorithms=['HS256'])
		decode(token, key=settings.SECRET_KEY, algorithms=['HS256'])
	except exceptions.DecodeError:
		return JSONResponse(status_code=401, content={"message": "Invalid token"})

	except exceptions.ExpiredSignatureError:
		return JSONResponse(status_code=401, content={"message": "Token expired"})