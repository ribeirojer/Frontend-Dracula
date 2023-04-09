import { AuthService } from "../services/AuthService";
import { Avatar, Button, Checkbox, Heading, Input } from "dracula-ui";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { FacebookLogo, GoogleLogo } from "phosphor-react";
import InputCheckout from "../components/InputCheckout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignUp";

type Props = {};

const Wrapper = styled.main`
  margin: 2rem auto;
  width: 60%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input-checkbox {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
  }
  .login-page {
    display: flex;
    flex-direction: column;
    h2 {
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      button {
        margin-top: 1rem;
      }
    }
  }
  .social-icons {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  }
`;

const User = (props: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    logradouro: "",
    numberAddress: "",
    complemento: "",
    bairro: "",
    city: "",
    state: "",
    tel: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const [editPassword, setEditPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    user &&
      setUserInfo({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        zipCode: "",
        logradouro: user.address.zipCode,
        numberAddress: "0",
        complemento: "",
        bairro: user.address.street,
        city: user.address.city,
        state: user.address.state,
        tel: user.phoneNumber,
      });
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await AuthService.login({
        email,
        password,
      });
      setUser(response);
      setUserInfo({
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email,
        zipCode: "",
        logradouro: response.address.zipCode,
        numberAddress: "0",
        complemento: "",
        bairro: response.address.street,
        city: response.address.city,
        state: response.address.state,
        tel: response.phoneNumber,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {user ? (
        <main>
          <Avatar
            src="https://ui.draculatheme.com/static/images/avatar.png"
            title="Count Dracula"
            borderVariant="large"
            mb="sm"
          />
          <Heading mb="md">Suas Informações</Heading>
          <Input
            color="purple"
            type="text"
            name="first-name"
            placeholder="Primeiro nome"
            value={userInfo.firstName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
          />
          <Input
            color="purple"
            type="text"
            name="last-name"
            placeholder="Último nome"
            value={userInfo.lastName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
          />
          <Input
            color="purple"
            type="email"
            name="email"
            placeholder="E-mail"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <Input
            color="purple"
            type="text"
            name="zip-code"
            placeholder="CEP"
            value={userInfo.zipCode}
            onChange={(e) =>
              setUserInfo({ ...userInfo, zipCode: e.target.value })
            }
          />
          <Input
            color="purple"
            type="text"
            name="address"
            placeholder="Endereço"
            value={userInfo.logradouro}
            onChange={(e) =>
              setUserInfo({ ...userInfo, logradouro: e.target.value })
            }
          />
          <Input
            color="purple"
            type="text"
            name="city"
            placeholder="Cidade"
            value={userInfo.city}
            onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
          />
          <Input
            color="purple"
            type="text"
            name="country"
            placeholder="País"
            value={userInfo.state}
            onChange={(e) =>
              setUserInfo({ ...userInfo, state: e.target.value })
            }
          />
          <Input
            color="purple"
            type="tel"
            name="tel"
            placeholder="Telefone"
            value={userInfo.tel}
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
          />
          <div className="input-checkbox">
            <Checkbox
              color="purple"
              type="checkbox"
              id="edit-password"
              checked={editPassword}
              onChange={(e) => setEditPassword(e.target.checked)}
            />
            <label htmlFor="edit-password" className="drac-text">
              Alterar Senha?
            </label>
          </div>

          {editPassword && (
            <>
              <Input
                color="purple"
                type="password"
                name="password"
                placeholder="Digite sua senha atual"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                color="purple"
                type="password"
                name="new-password"
                placeholder="Digite a nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                color="purple"
                type="password"
                name="confirm-new-password"
                placeholder="Digite novamente sua nova senha"
                value={confirmNewPassword}
                onChange={(e) => setconfirmNewPassword(e.target.value)}
              />
            </>
          )}
          <Button type={"submit"}>Salvar</Button>
        </main>
      ) : isRegister ? (
        <>
          <SignupForm></SignupForm>
          <Button
            onClick={() => setIsRegister(false)}
            color="cyanGreen"
            variant="outline"
          >
            Cadastrar
          </Button>
        </>
      ) : (
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
            <Button
              onClick={() => setIsRegister(true)}
              color="green"
              variant="ghost"
            >
              Cadastrar
            </Button>
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
      )}
    </Wrapper>
  );
};

export default User;
