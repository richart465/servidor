import { useState } from "react";


const ClientsLayout = ({action}) => {

  const [client, setClient] = useState({
    codigoContrato: "",
    fechaRegistro: "",
    nombreCliente: "",
    apellidoCliente: "",
    phone: "",
    manzana: "",
    lote: "",
    address: "EJIDO BENITO JUAREZ",
  });

  const handleInputChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <h1>Registro de cliente</h1>

      <div className="client__form mt-4">
        <form onSubmit={(e) => action(e, client)}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="codigoContrato">Código de contrato</label>
                <input
                  type="number"
                  className="form-control"
                  id="codigoContrato"
                  placeholder="Código de contrato"
                  name="codigoContrato"
                  value={client.codigoContrato}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="fechaRegistro">Fecha de registro</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaRegistro"
                  name="fechaRegistro"
                  value={client.fechaRegistro}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="nombreCliente">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreCliente"
                  placeholder="Nombre del cliente"
                  name="nombreCliente"
                  value={client.nombreCliente}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="apellidoCliente">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellidoCliente"
                  placeholder="Apellido del cliente"
                  name="apellidoCliente"
                  value={client.apellidoCliente}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Teléfono del cliente"
                  name="phone"
                  min="0"
                  value={client.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col"></div>
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
                  value={client.manzana}
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
                  value={client.lote}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Dirección"
                  name="address"
                  value={client.address}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="submit__button mt-4">
            <button
              type="submit"
              className="btn btn-primary d-block ms-auto register__btn"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClientsLayout;