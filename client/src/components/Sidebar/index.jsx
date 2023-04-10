import { Link } from "react-router-dom";

import "./sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <ul>
          <li>
            <Link to="/dashboard">
              <span><i className="fas fa-home"></i> </span>
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/clients">
              <span><i className="fas fa-users"></i> </span>
              <span>Registrar Cliente</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/history">
              <span><i className="fa-solid fa-book-open"></i> </span>
              <span>Historial de Pagos</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/pay">
              <span><i className="fas fa-money-bill-wave"></i> </span>
              <span>Registrar Pago</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom__menu">
        <ul>
          <li>
            <Link to="/dashboard/settings">
              <span><i className="fas fa-cog"></i> </span>
              <span>Configuración</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
