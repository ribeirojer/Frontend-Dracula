import logo from "../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="logo da empresa Dracula E-commerce" />
    </Link>
  );
};

export default Logo;
