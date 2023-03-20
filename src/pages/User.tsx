import { UserCircle } from "phosphor-react";
import image3 from "../assets/logo.png";

type Props = {};

const User = (props: Props) => {
  return (
    <div>
      <img src={image3}></img>
      <UserCircle></UserCircle>
      <p>exibir informações do usuário, endereço e tudo mais</p>
      <p>informações podem ser editadas</p>
    </div>
  );
};

export default User;
