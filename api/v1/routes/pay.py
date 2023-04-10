
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from ..config.db_service import db
from ..models.pay import NewPay
from datetime import datetime, timedelta
from ..config.oauth2 import get_current_active_user
from ..schemas.invoice import invoiceSchema, invoicesSchema


pay = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/")


@pay.post("/")
async def pay_contrato(new_pay: NewPay, token: str = Depends(get_current_active_user)):
    """Inserta un nuevo cliente en la base de datos.

    Args:
        new_cliente (NewClient): _description_
    """
    # search a codigoContrato in db
    cliente = db.gorda.clientes.find_one({"codigoContrato": new_pay.codigoContrato})

    if not cliente:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Contrato no encontrado")

    # update numeroDePagos, proximaFechaPago y estadoProximoPago
    cliente["numeroDePagos"] += 1
    cliente["proximaFechaPago"] = datetime.now() + timedelta(days=30)
    cliente["estadoProximoPago"] = "pendiente"

    # update clientes in db
    db.gorda.clientes.update_one({"codigoContrato": new_pay.codigoContrato}, {"$set": cliente})

    # insert invoices in db
    recipt = {
        "codigoContrato": new_pay.codigoContrato,
        "name": new_pay.name,
        "lastName": new_pay.lastName,
        "manzana": new_pay.manzana,
        "lote": new_pay.lote,
        "estado": "pagado",
        "fecha": datetime.now(),
        "numeroDePagos": cliente["numeroDePagos"],
    }

    db.gorda.invoices.insert_one(recipt).inserted_id

    return JSONResponse(status_code=status.HTTP_201_CREATED, content={"message": "Pago realizado exitosamente"})



@pay.get("/{id}")
async def get_invoices(id: int):
    """Obtiene todos los clientes de la base de datos.

    Args:
        token (str, optional): _description_. Defaults to Depends(get_current_active_user).
    """
    invoices = db.gorda.invoices.find({"codigoContrato": int(id)})

    return JSONResponse(status_code=status.HTTP_200_OK, content={"invoices": invoicesSchema(invoices)})

@pay.get("/{id}/{invoice_num}")
async def get_invoice(id: int, invoice_num: int):
    """Obtiene todos los clientes de la base de datos.

    Args:
        token (str, optional): _description_. Defaults to Depends(get_current_active_user).
    """
    invoice = db.gorda.invoices.find_one({"codigoContrato": int(id), "numeroDePagos": int(invoice_num)})

    return JSONResponse(status_code=status.HTTP_200_OK, content={"invoice": invoiceSchema(invoice)})