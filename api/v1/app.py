import os
import logging
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from .routes.auth import auth
from .routes.users import users
from .routes.cliente import cliente
from .routes.pay import pay



logging.config.fileConfig(os.path.join(os.getcwd(), f"api/v1/config/logging.conf"), disable_existing_loggers=False)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Web app API REST",
    description="This API Manages all endpoints",
    version="1.0.0",
    swagger_ui_parameters={"defaultModelsExpandDepth": -1}
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", include_in_schema=False)
def root():
    """Redirects to /docs"""
    return RedirectResponse("/docs")

app.include_router(auth, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(users, prefix="/api/v1/users", tags=["Users"])
app.include_router(cliente, prefix="/api/v1/cliente", tags=["Cliente"])
app.include_router(pay, prefix="/api/v1/pay", tags=["Pay"])

