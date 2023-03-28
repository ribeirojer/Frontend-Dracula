import { Anchor } from "dracula-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      link: "/categories/hotdeals",
    },
    {
      text: "Laptops",
      link: "/categories/laptops",
    },
    {
      text: "Smartphones",
      link: "/categories/smartphones",
    },
    {
      text: "Câmeras",
      link: "/categories/cameras",
    },
    {
      text: "Acessórios",
      link: "/categories/acessorios",
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
