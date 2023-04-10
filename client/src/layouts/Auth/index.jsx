import { useState } from "react";
import Logo from "../../assets/logo.jpg"
import "./auth.styles.css";

const AuthLayout = ({ action }) => {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

  return (
    <div className="auth__layout">
      <div className="auth__form">
        <img src={Logo} alt="logo" className="mb-4 m-auto d-block rounded-img" />
        <div className="form__container">
          <form onSubmit={(e) => action(e, user)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary d-block ms-auto">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
