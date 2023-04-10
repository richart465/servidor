import Sidebar from "../../components/Sidebar";
import PayLayout from "../../layouts/Pay/Pay";
import axios from "axios";

const URL = import.meta.env.VITE_API_SERVER;

const Pay = () => {

  const pay = async (e, payment) => {
    e.preventDefault();

    // check if all fields are filled
    if (
      payment.codigoContrato === "" ||
      payment.name === "" ||
      payment.lastName === "" ||
      payment.manzana === "" ||
      payment.lote === ""
    ) {
      alert("Por favor, rellene todos los campos");
      return;
    }

    await axios.post(`${URL}/api/v1/pay/`, {
      codigoContrato: payment.codigoContrato,
      name: payment.name,
      lastName: payment.lastName,
      manzana: payment.manzana,
      lote: payment.lote
    },
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))["access_token"]}`,
      },
    }
    ).then(res => {
      console.log(res);
      alert("Pago registrado con éxito");
    }).catch(err => {
      console.log(err)
      alert("Error al registrar el pago (reason: " + err.response.data.detail + ")");
    });
  };

  return (
    <div className="dashboard__container d-flex">
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-layout__content p-5 w-100">
        <PayLayout action={pay}/>
      </div>
    </div>
  );
};

export default Pay;
