import { AuthService } from "../services/AuthService";
import { Avatar, Button, Checkbox, Input } from "dracula-ui";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignUp";
import InputsCheckout from "./Checkout/InputsCheckout";
import { IAddress2, IUser } from "../interfaces/User";
import Signin from "../components/Signin";

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
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    .login-page {
      width: 100%;
    }
    form {
      display: flex;
      flex-direction: column;
      button {
        margin-top: 1rem;
      }
      h2 {
        text-align: center;
      }
    }
  }
`;

const User = (props: Props) => {
  const { user, saveUserToContext } = useContext(UserContext);
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
  const [userErrorInfo, setUserErrorInfo] = useState({
    firstName: false,
    lastName: false,
    email: false,
    zipCode: false,
    logradouro: false,
    numberAddress: false,
    complemento: false,
    bairro: false,
    city: false,
    state: false,
    tel: false,
  });
  const [errorEmailRegex, setErrorEmailRegex] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const [editPassword, setEditPassword] = useState(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    user &&
      setUserInfo({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        zipCode: "",
        logradouro: user.address?.logradouro,
        numberAddress: "0",
        complemento: "",
        bairro: user.address?.street,
        city: user.address?.city,
        state: user.address?.state,
        tel: user.phoneNumber,
      });
  }, [user]);

  async function handleSubmitCep(event: any) {
    event.preventDefault();
    const response = await fetch(
      `https://brasilapi.com.br/api/cep/v1/${event.target.value}`
    );
    const data: IAddress2 = await response.json();
    setUserInfo({
      ...userInfo,
      zipCode: data.cep,
      logradouro: data.street,
      bairro: data.neighborhood,
      city: data.city,
      state: data.state,
    });
  }

  async function handleSaveUserData() {
    try {
      const response = await AuthService.update({
        ...userInfo,
      } as unknown as IUser);
      saveUserToContext(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogoffUser() {
    try {
      const response = await AuthService.logout();
      saveUserToContext(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
          <InputsCheckout
            title={"Suas Informações"}
            info={userInfo}
            setInfo={setUserInfo}
            errorInfo={userErrorInfo}
            errorEmailRegex={errorEmailRegex}
            handleSubmitCep={handleSubmitCep}
          ></InputsCheckout>
          <div className="input-checkbox">
            <Checkbox
              id="edit-password"
              color="purple"
              type="checkbox"
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
          <Button onClick={() => handleSaveUserData()}>Salvar</Button>
          <Button onClick={() => handleLogoffUser()} color="purple">
            Sair
          </Button>
        </main>
      ) : isLogin ? (
        <Signin setIsLogin={setIsLogin} />
      ) : (
        <SignupForm setIsLogin={setIsLogin} />
      )}
    </Wrapper>
  );
};

export default User;
