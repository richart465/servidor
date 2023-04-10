// read query params from url
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_API_SERVER;

const Preview = () => {
  const { contract, invoice } = useParams();
  const [data, setData] = useState({});

  const printPage = () => {
    window.print();
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${URL}/api/v1/pay/${contract}/${invoice}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${
              JSON.parse(localStorage.getItem("token"))["access_token"]
            }`,
          },
        })
        .then((res) => {
          console.log(res.data.invoice);
          setData(res.data.invoice);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
  }, []);

  return (
    <div className="invoice p-5 w-100">
      <div className="print__area d-flex no-print">
        <button className="btn btn-primary d-block ms-auto" onClick={printPage}>
          <i className="fa fa-print"></i>
          <span> Imprimir</span>
        </button>
      </div>
      <div className="head__section d-flex mt-4">
        <div className="title">
          <h1>Recibo de pago</h1>
        </div>
        <div className="subtitle ms-auto d-flex flex-column">
          <div className="date d-flex align-items-center">
            <span style={{ width: "130px" }}>Fecha Pago:</span>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              className="form-control hide__print__border"
            />
          </div>
          <span>
            Numero de contrato: <b className="inline">{contract}</b>
          </span>
        </div>
      </div>
      <hr />
      <div className="propietary__info">
        <h5>Datos del Propietario:</h5>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="name"
                  value="Julia Garcia Cruz"
                  disabled
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Tipo de documento:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                  value={"DOC "}
                  readOnly
                  disabled
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Nro. Documento:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                  value={"0000"}
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="property__data">
        <h5>Por el alquiler de:</h5>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Código de inmueble:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                  value={"01"}
                  disabled
                  readOnly
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Tipo de inmueble:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                  value={"Terreno"}
                  disabled
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Descripcion:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                  value={`M${data.manzana} - L${data.lote}`}
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="inq__data">
        <h5>Datos del Inquilino:</h5>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="name"
                  value={`${data.name} ${data.lastName}`}
                  readOnly
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Tipo de documento:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                  value={"INE"}
                  disabled
                  readOnly
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="phone">Nro. Documento:</label>
                <input
                  type="text"
                  className="form-control hide__print__border"
                  id="typedoc"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="footer__section d-flex w-100 align-items-center">
        <div>Numero de pago: {invoice}</div>
        <div className="date d-flex align-items-center ms-auto">
          <span style={{ width: "130px" }}>Importe Pagado:</span>
          <input
            type="number"
            value={2500}
            className="form-control hide__print__border ms-auto limited__width"
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
