import { Anchor, Heading } from "dracula-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../utils/cardsData";
import CardProduct from "./CardProduct";

type Props = {};

const WrapperSectionC = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
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
    justify-content: center;
    flex-wrap: wrap;
  }
  .products-slick {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SectionC = (props: Props) => {
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
    <WrapperSectionC>
      <div className="section-title">
        <Heading size="xl">Mais Vendidos</Heading>
        <ul className="section-nav">
          {dataList.map((item) => {
            return (
              <li className="active">
                <Link to={item.link}>
                  <Anchor weight="semibold" mb="sm">
                    {item.text}
                  </Anchor>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="products-slick" data-nav="#slick-nav-2">
        {data.slice(0, 4).map((item) => {
          return (
            <CardProduct
              salePercentage={item.salePercentage}
              isNew={item.isNew}
              oldPrice={item.oldPrice}
              imageSrc={item.imgSrc}
              category={item.category}
              productName={item.productName}
              productPrice={item.productPrice}
            ></CardProduct>
          );
        })}
      </div>
    </WrapperSectionC>
  );
};

export default SectionC;
