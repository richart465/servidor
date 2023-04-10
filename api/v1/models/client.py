from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class NewClient(BaseModel):
    codigoContrato: int
    fechaContrato: datetime = datetime.now()
    name: str
    lastName: str
    phone: str
    manzana: str
    lote: str
    direccion: str = "EJIDO BENITO JUAREZ"
    proximaFechaPago: Optional[datetime]
    estadoProximoPago: str = "pendiente"
    numeroDePagos: int = 0

