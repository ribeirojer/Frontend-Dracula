import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../utils/theme";

type Props = {};

const WrapperNavigation = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-bottom: 2px solid ${theme.cinzaclaro};
  .navbar-nav {
    margin-left: 2rem;
    li {
      margin-right: 1rem;
      font-weight: 500;
    }
  }
`;

const Navigation = (props: Props) => {
  return (
    <WrapperNavigation>
      <ul className="navbar-nav">
        <li className="active">
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <Link to={"/hotdeals"}>Promoções</Link>
        </li>
        <li>
          <Link to={"/categories"}>Categorias</Link>
        </li>
        <li>
          <Link to={"/categories/laptops"}>Laptops</Link>
        </li>
        <li>
          <Link to={"/categories/smartphones"}>Smartphones</Link>
        </li>
        <li>
          <Link to={"/categories/cameras"}>Câmeras</Link>
        </li>
        <li>
          <Link to={"/categories/acessorios"}>Acessórios</Link>
        </li>
      </ul>
    </WrapperNavigation>
  );
};

export default Navigation;
