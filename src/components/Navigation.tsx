import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../utils/theme";

type Props = {};

const WrapperNavigation = styled.section`
  display: flex;
  background: #1e1f29;
  box-shadow: 0px 0px 8px #ffffff33;
  padding: 1rem 2rem;
  li {
    list-style-type: none;
    margin-right: 1rem;
    font-weight: 500;
    &:hover a {
      color: ${theme.dracula.purple};
    }
  }
`;

const Navigation = (props: Props) => {
  const data = [
    {
      text: "Início",
      link: "/",
    },
    {
      text: "Promoções",
      link: "/shop?c=hotdeals",
    },
    {
      text: "Laptops",
      link: "/shop?c=laptops",
    },
    {
      text: "Smartphones",
      link: "/shop?c=smartphones",
    },
    {
      text: "Câmeras",
      link: "/shop?c=cameras",
    },
    {
      text: "Acessórios",
      link: "/shop?c=acessorios",
    },
    {
      text: "Ver Comparação",
      link: "/compare",
    },
    {
      text: "produtos",
      link: "/produtos",
    },
    {
      text: "shop",
      link: "/shop",
    },
  ];

  return (
    <WrapperNavigation>
      {data.map((item) => {
        return (
          <li key={item.link} className="active">
            <Link className="drac-text drac-text-white" to={item.link}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </WrapperNavigation>
  );
};

export default Navigation;
