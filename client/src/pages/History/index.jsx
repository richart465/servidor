import Sidebar from "../../components/Sidebar";
import HistoryLayout from "../../layouts/History";
import axios from "axios";
import { useState } from "react";

const URL = import.meta.env.VITE_API_SERVER;

const History = () => {
  const [history, setHistory] = useState([]);

  const getHistory = async (e, code) => {
    e.preventDefault();

    // check if contractCode is empty
    if (!code.contractCode) {
      alert("Ingrese un código de contrato");
      return;
    }

    await axios
      .get(`${URL}/api/v1/pay/${code.contractCode}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("token"))["access_token"]
          }`,
        },
      })
      .then((res) => {
        // if res is empty array
        console.log(res.data);
        if (res.data.invoices.length === 0) {
          alert("No se encontraron pagos");
          return;
        }

        setHistory(res.data.invoices);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message)
      });
  };

  return (
    <div className="dashboard__container d-flex">
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>
      <div className="dashboard-layout__content p-5 w-100">
        <HistoryLayout data={history} action={getHistory} />
      </div>
    </div>
  );
};

export default History;
