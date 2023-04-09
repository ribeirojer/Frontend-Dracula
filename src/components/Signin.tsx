import { useContext, useState } from "react";
import InputCheckout from "./InputCheckout";
import { Button, Heading } from "dracula-ui";
import { AuthService } from "../services/AuthService";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FacebookLogo, GoogleLogo } from "phosphor-react";

type Props = {};

const Signin = (props: Props) => {
  const { saveUserToContext } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await AuthService.login({
        email,
        password,
      });
      saveUserToContext(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <InputCheckout
          id="email"
          color="purple"
          error={false}
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <InputCheckout
          id="password"
          color="purple"
          error={false}
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Login</Button>
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
