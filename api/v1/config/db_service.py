from pymongo import MongoClient
from .globals import Settings

settings = Settings()
db = MongoClient(settings.MONGODB_URL)