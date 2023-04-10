import Sidebar from "../../components/Sidebar";
import ClientsLayout from "../../layouts/Clients";
import axios from "axios";

const URL = import.meta.env.VITE_API_SERVER;

const Clients = () => {

  const addClient = async (e, client) => {
    e.preventDefault();

    // check if all fields are filled
    if (
      client.codigoContrato === "" ||
      client.fechaRegistro === "" ||
      client.nombreCliente === "" ||
      client.apellidoCliente === "" ||
      client.phone === "" ||
      client.manzana === "" ||
      client.lote === ""
    ) {
      alert("Por favor, rellene todos los campos");
      return;
    }

    await axios.post(`${URL}/api/v1/cliente/`, {
      "codigoContrato": client.codigoContrato,
      "fechaContrato": new Date(client.fechaRegistro),
      "name": client.nombreCliente,
      "lastName": client.apellidoCliente,
      "phone": client.phone,
      "manzana": client.manzana,
      "lote": client.lote,
      "numeroDePagos": 0
    },
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))["access_token"]}`,
      },
    }).then((res) => {
      alert("Cliente agregado con éxito");
    }
    ).catch((err) => {
      alert("Error al agregar cliente");
    }
    );
  };

  return (
    <div className="dashboard__container d-flex">
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-layout__content p-5 w-100">
        <ClientsLayout action={addClient}/>
      </div>
    </div>
  );
};

export default Clients;
