import { useContext, useState } from "react";
import InputCheckout from "./InputCheckout";
import { Button, Heading } from "dracula-ui";
import { hasTrueFields } from "../utils";
import { AuthService } from "../services/AuthService";
import { UserContext } from "../App";

function SignupForm() {
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!formData.firstName) {
      setErrorData({ ...errorData, firstName: true });
    }
    if (!formData.lastName) {
      setErrorData({ ...errorData, lastName: true });
    }
    if (!formData.email) {
      setErrorData({ ...errorData, email: true });
    }
    if (!formData.password) {
      setErrorData({ ...errorData, password: true });
    }
    if (!emailRegex.test(formData.email)) {
      setErrorData({ ...errorData, emailRegex: true });
    }
    if (!passwordRegex.test(formData.password)) {
      setErrorData({ ...errorData, passwordStrong: true });
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

  return (
    <form onSubmit={handleSubmit}>
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
        }} //'Email inválido'
      />
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
        }} //'A senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 número'
      />
      <Button color="cyanGreen" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default SignupForm;
