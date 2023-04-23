import { useContext, useState } from "react";
import InputCheckout from "./InputCheckout";
import { Button, Heading } from "dracula-ui";
import { AuthService } from "../services/AuthService";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FacebookLogo, GoogleLogo } from "phosphor-react";
import { hasTrueFields } from "../utils";

type Props = {};

const Signin = (props: Props) => {
  const { saveUserToContext } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({
    password: "",
    email: "",
  });
  const [loginError, setLoginError] = useState({
    email: false,
    password: false,
    emailRegex: false,
    passwordStrong: false,
  });
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!loginInfo.email) {
      setLoginError({ ...loginError, email: true });
    }
    if (!loginInfo.password) {
      setLoginError({ ...loginError, password: true });
    }
    if (!emailRegex.test(loginInfo.email)) {
      setLoginError({ ...loginError, emailRegex: true });
    }
    if (!passwordRegex.test(loginInfo.password)) {
      setLoginError({ ...loginError, passwordStrong: true });
    }

    const isValid = hasTrueFields(loginError);

    if (isValid) {
      AuthService.login(loginInfo)
        .then((data) => {
          saveUserToContext(data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="login-page">
      <Heading>Entrar</Heading>
      <form onSubmit={handleSubmit}>
        <InputCheckout
          id="email"
          color="purple"
          error={loginError.email}
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={loginInfo.email}
          onChange={(e: any) => {
            setLoginInfo({ ...loginInfo, email: e.target.value });
          }}
        />
        <InputCheckout
          id="password"
          color="purple"
          error={loginError.password}
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          value={loginInfo.password}
          onChange={(e: any) => {
            setLoginInfo({ ...loginInfo, password: e.target.value });
          }}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <div className="social-icons">
        <Heading size="md">Ou entre com</Heading>
        <div>
          <Button color="purpleCyan">
            <FacebookLogo size={24} />
            Facebook
          </Button>
          <Button color="yellowPink">
            <GoogleLogo size={24} />
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
