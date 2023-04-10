const SettingsLayout = () => {
  return (
    <>
      <h1>Configuración</h1>

      <div className="user__info__form mt-4">
        <h3>Información de usuario</h3>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Nombre"
                  name="name"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Apellido"
                  name="lastName"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="username">Nombre de usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Nombre de usuario"
                  name="username"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="password">Antigua contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  placeholder="Contraseña"
                  name="oldPassword"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="password">Nueva contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                  name="password"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block ms-auto mt-4"
          >
            Guardar cambios
          </button>
        </form>
      </div>

      <div className="new_user__form mt-5">
        <h3>Crear nuevo usuario</h3>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="newName"
                  aria-describedby="emailHelp"
                  placeholder="Nombre"
                  name="newName"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="newLastName"
                  placeholder="Apellido"
                  name="newLastName"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="username">Nombre de usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="newUsername"
                  placeholder="Nombre de usuario"
                  name="newUsername"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Contraseña"
                  name="newPassword"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group mt-4">
                <label htmlFor="password">Confirmar contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="newConfirmPassword"
                  placeholder="Contraseña"
                  name="newConfirmPassword"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-4">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Permiso de usuario</option>
              <option value="0">Administrador</option>
              <option value="1">Usario</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block ms-auto mt-4"
          >
            Registrar usuario
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsLayout;
