from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class NewPay(BaseModel):
    codigoContrato: int
    name: str
    lastName: str
    manzana: str
    lote: str
    estado: str = "pagado"
    direccion: str = "EJIDO BENITO JUAREZ"
    fecha: Optional[datetime]

