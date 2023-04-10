
import { useState } from "react";

const PayLayout = ({action}) => {

  const [payment, setPayment] = useState({
    codigoContrato: "",
    name: "",
    lastName: "",
    manzana: "",
    lote: "",
    direccion: "EJIDO BENITO JUAREZ"
  });

  const handleInputChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Registrar nuevo pago</h1>

      <div className="payment__form mt-4 w-100">
        <form onSubmit={(e) => action(e, payment)}>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label htmlFor="codigoContrato">Código de contrato</label>
                      <input
                        type="text"
                        className="form-control"
                        id="codigoContrato"
                        placeholder="Código de contrato"
                        name="codigoContrato"
                        value={payment.codigoContrato}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="nombreCliente">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombreCliente"
                        placeholder="Nombre del cliente"
                        name="name"
                        value={payment.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="apellidoCliente">Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        id="apellidoCliente"
                        placeholder="Apellido del cliente"
                        name="lastName"
                        value={payment.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="manzana">Manzana</label>
                  <input
                    type="text"
                    className="form-control"
                    id="manzana"
                    placeholder="Manzana"
                    name="manzana"
                    value={payment.manzana}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="lote">Lote</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lote"
                    placeholder="Lote"
                    name="lote"
                    value={payment.lote}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="direccion">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    placeholder="Direccion"
                    name="direccion"
                    value={payment.direccion}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="submit__button mt-4">
            <button
              type="submit"
              className="btn btn-primary d-block ms-auto register__btn"
            >
              Pagar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PayLayout;
