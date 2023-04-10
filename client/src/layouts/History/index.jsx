import "./history.styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const HistoryLayout = ({ data, action }) => {

  const [code, setCode] = useState({
    contractCode: "",
  });

  const handleInputChange = (e) => {
    setCode({
      ...code,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Historial de pagos</h1>

      <div className="history__table mt-4">
        <div className="w-30 mt-4 mb-4 ">
          <form onSubmit={(e) => action(e, code)}>
            <div className="input-group">
              <input
                type="number"
                className="search-input form-control"
                placeholder="Código de contrato"
                name="contractCode"
                value={code.contractCode}
                onChange={handleInputChange}
              ></input>
              <span className="input-group-btn">
                <button type="submit" className="search-btn btn btn-default">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Código de contrato</th>
              <th scope="col">Numero de pago</th>
              <th scope="col">Estado de pago</th>
              <th scope="col">Fecha de pago</th>
              <th scope="col">Mostrar recibo</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.codigoContrato}</th>
                <td>{item.numeroDePago}</td>
                <td>{item.estado}</td>
                <td>{
                  // format to es-ES
                  new Date(item.fecha).toLocaleDateString("es-ES")
                  }</td>
                <td>
                  <Link type="button" className="btn btn-primary" to={`/dashboard/preview/${item.codigoContrato}/${item.numeroDePago}`} target="_blank">
                    Ver recibo
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HistoryLayout;
