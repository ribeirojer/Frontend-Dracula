import axios from "axios";
import { UserCircle } from "phosphor-react";
import image3 from "../assets/logo.png";

type Props = {};

const User = (props: Props) => {
  const token = "";
  axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        limit: 10,
        page: 1,
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

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
