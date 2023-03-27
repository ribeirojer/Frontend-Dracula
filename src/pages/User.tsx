import axios from "axios";
import { Avatar } from "dracula-ui";
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
      <Avatar
        src="https://ui.draculatheme.com/static/images/avatar.png"
        title="Count Dracula"
        borderVariant="large"
        mb="sm"
      />
      <p>exibir informações do usuário, endereço e tudo mais</p>
      <p>informações podem ser editadas</p>
    </div>
  );
};

export default User;
