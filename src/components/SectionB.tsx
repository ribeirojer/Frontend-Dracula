import { Heading } from "dracula-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../utils/cardsData";
import CardProduct from "./CardProduct";

type Props = {};

const WrapperSectionB = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .section-title {
    padding: 0 2rem 2rem;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      li {
        list-style-type: none;
        margin-left: 1rem;
      }
    }
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SectionB = (props: Props) => {
  const dataList = [
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
    <WrapperSectionB>
      <div className="section-title">
        <Heading size="xl">Novos Produtos</Heading>
        <ul className="section-nav">
          {dataList.map((item) => {
            return (
              <li key={item.link} className="active">
                <Link className="drac-text drac-text-white" to={item.link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="products">
        {data.slice(0, 4).map((item) => {
          return (
            <CardProduct
              key={item.id}
              product={item}
            ></CardProduct>
          );
        })}
      </div>
    </WrapperSectionB>
  );
};

export default SectionB;
