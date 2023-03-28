import axios from "axios";
import { Avatar, Button, Checkbox, Heading, Input } from "dracula-ui";
import { useState } from "react";
import styled from "styled-components";

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
`;

const User = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const [createAccount, setCreateAccount] = useState(false);
  const [posts, setPosts] = useState([]);

  axios
    .post("/api/auth/login", {
      username: "usuario",
      password: "senha",
    })
    .then((response) => {
      const token = response.data.token;
      // salva o token em algum lugar, como em um cookie ou armazenamento local
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Wrapper>
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
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        color="purple"
        type="text"
        name="last-name"
        placeholder="Último nome"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        color="purple"
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        color="purple"
        type="text"
        name="zip-code"
        placeholder="CEP"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <Input
        color="purple"
        type="text"
        name="address"
        placeholder="Endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        color="purple"
        type="text"
        name="city"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        color="purple"
        type="text"
        name="country"
        placeholder="País"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Input
        color="purple"
        type="tel"
        name="tel"
        placeholder="Telefone"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <div className="input-checkbox">
        <Checkbox
          color="purple"
          type="checkbox"
          id="edit-password"
          checked={createAccount}
          onChange={(e) => setCreateAccount(e.target.checked)}
        />
        <label htmlFor="edit-password" className="drac-text">Alterar Senha?</label>
      </div>

      {createAccount && (
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
    </Wrapper>
  );
};

export default User;
