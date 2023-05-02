import { useContext, useState } from "react";
import InputCheckout from "./InputCheckout";
import { Button, Heading, Paragraph } from "dracula-ui";
import { emailRegex, hasTrueFields, passwordRegex } from "../utils";
import { AuthService } from "../services/AuthService";
import { UserContext } from "../App";
import styled from "styled-components";

type Props = {
  setIsLogin?: any;
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  h2 {
    text-align: center;
  }
  input {
    margin: 0.2rem 0;
  }
  .signin {
    cursor: pointer;
  }
`;

function Signup({ setIsLogin }: Props) {
  const { saveUserToContext } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorData, setErrorData] = useState({
    firstName: false,
    lastName: false,
    email: false,
    emailRegex: false,
    password: false,
    passwordStrong: false,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setErrorData((prev) => ({
      email: false,
      emailRegex: false,
      password: false,
      passwordStrong: false,
      firstName: false,
      lastName: false,
    }));

    if (!formData.firstName) {
      setErrorData((prev) => ({ ...prev, firstName: true }));
    }
    if (!formData.lastName) {
      setErrorData((prev) => ({ ...prev, lastName: true }));
    }
    if (!formData.email) {
      setErrorData((prev) => ({ ...prev, email: true }));
    }
    if (!formData.password) {
      setErrorData((prev) => ({ ...prev, password: true }));
    }
    if (!emailRegex.test(formData.email)) {
      setErrorData((prev) => ({ ...prev, emailRegex: true }));
    }
    if (!passwordRegex.test(formData.password)) {
      setErrorData((prev) => ({ ...prev, passwordStrong: true }));
    }

    const isValid = hasTrueFields(errorData);

    if (isValid) {
      AuthService.register(formData)
        .then((data) => {
          saveUserToContext(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  function handleSignin() {
    setIsLogin(true);
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Heading mb="md">Cadastrar</Heading>
      <InputCheckout
        id="first-name"
        color="purple"
        type="text"
        label="Primeiro nome"
        error={errorData.firstName}
        placeholder="Primeiro nome"
        value={formData.firstName}
        onChange={(e: any) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <InputCheckout
        id="last-name"
        color="purple"
        type="text"
        label="Último nome"
        error={errorData.lastName}
        placeholder="Último nome"
        value={formData.lastName}
        onChange={(e: any) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <InputCheckout
        id="email"
        color="purple"
        error={errorData.email}
        type="email"
        label="E-mail"
        placeholder="E-mail"
        value={formData.email}
        onChange={(e: any) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      {errorData.emailRegex && (
        <Paragraph color="red" my="xs">
          E-mail inválido
        </Paragraph>
      )}
      <InputCheckout
        id="password"
        color="purple"
        error={errorData.password}
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        value={formData.password}
        onChange={(e: any) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      {errorData.passwordStrong && (
        <Paragraph color="red" my="xs">
          A senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1
          letra minúscula e 1 número
        </Paragraph>
      )}
      <Button color="cyanGreen" type="submit" my="sm">
        Cadastrar
      </Button>
      <Paragraph align="center">
        Já tem uma conta?{" "}
        <span onClick={() => handleSignin()} className="signin drac-text-green">
          Faça login
        </span>
      </Paragraph>
    </Wrapper>
  );
}

export default Signup;
