import axios from "axios";
import QueryString from "qs";
import AuthLayout from "../../layouts/Auth";
import { useHistory } from "react-router-dom";


const URL = import.meta.env.VITE_API_SERVER;

const Auth = () => {

  const history = useHistory();

  const signIn = async (e, action) => {
    e.preventDefault();

    // prevent empty fields
    if (action.email === "" || action.password === "") {
      alert("Por favor, rellene todos los campos");
      return;
    }

    await axios.post(
      `${URL}/api/v1/auth/`,
      QueryString.stringify(action)
    ).then((res) => {
      // save token to local storage
      localStorage.setItem("token", JSON.stringify(res.data));
      history.push("/dashboard");
    })
    .catch((err) => {
      alert("Usuario o contraseña incorrectos");
    });
  };

  return <AuthLayout action={signIn} />;
};

export default Auth;
