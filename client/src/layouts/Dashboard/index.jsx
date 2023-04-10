const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <h1>Inicio</h1>

      <div className="dashboard-layout__content mt-4">
        <h3>Pagos pendientes</h3>
        <div className="dashboard-layout__content__table mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código de contrato</th>
                <th scope="col">Nombre del cliente</th>
                <th scope="col">Apellido del cliente</th>
                <th scope="col">Numero de pago</th>
                <th scope="col">Fecha de vencimiento</th>
                <th scope="col">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">123456</th>
                <td>John</td>
                <td>Doe</td>
                <td>1</td>
                <td>2021-01-01</td>
                <td>1000</td>
              </tr>
              <tr>
                <th scope="row">123456</th>
                <td>John</td>
                <td>Doe</td>
                <td>1</td>
                <td>2021-01-01</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="dashboard-layout__content mt-4">
        <h3>Pagos atrasados</h3>
        <div className="dashboard-layout__content__table mt-4">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código de contrato</th>
                <th scope="col">Nombre del cliente</th>
                <th scope="col">Apellido del cliente</th>
                <th scope="col">Numero de pago</th>
                <th scope="col">Fecha de vencimiento</th>
                <th scope="col">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">123456</th>
                <td>John</td>
                <td>Doe</td>
                <td>1</td>
                <td>2021-01-01</td>
                <td>1000</td>
              </tr>
              <tr>
                <th scope="row">123456</th>
                <td>John</td>
                <td>Doe</td>
                <td>1</td>
                <td>2021-01-01</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
