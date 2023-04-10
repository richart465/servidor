
def invoiceSchema(invoice):
    return {
        "codigoContrato": invoice['codigoContrato'],
        "name": invoice['name'],
        "lastName": invoice['lastName'],
        "manzana": invoice['manzana'],
        "lote": invoice['lote'],
        "estado": invoice['estado'],
        "fecha": str(invoice['fecha']),
        "numeroDePago": invoice['numeroDePagos']
    }

def invoicesSchema(invoices):
    return [invoiceSchema(invoice) for invoice in invoices]