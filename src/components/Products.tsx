import styled from "styled-components";
import CardProduct from "./CardProduct";

import image1 from "../assets/8.jpg";
import image2 from "../assets/11.jpg";
import image3 from "../assets/17.jpg";
import image4 from "../assets/25.jpg";
import image5 from "../assets/29.jpg";
import image6 from "../assets/30.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: 84%;
`;
const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 3rem;

  li {
    padding: 7px 25px;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 25px;
    transition: 0.3s;
  }
  li:hover {
    color: var(--cor-C);
    background-color: var(--cor-A);
  }
`;
type Props = {};

const Products = (props: Props) => {
  const [showCard, setShowCard] = useState([true, true, true]);

  return (
    <ProductsSection>
      <h1>Nossos Produtos</h1>
      <ul>
        <li onClick={() => setShowCard([true, true, true])}>Todos</li>
        <li onClick={() => setShowCard([false, true, true])}>Decorativos</li>
        <li onClick={() => setShowCard([true, false, true])}>Úteis</li>
        <li onClick={() => setShowCard([true, true, false])}>Personalizados</li>
      </ul>
      <Wrapper>
        {showCard[0] && (
          <CardProduct
            imageSrc={image4}
            category={""}
            productName={""}
            productPrice={0}
          />
        )}
        {showCard[0] && (
          <CardProduct
            imageSrc={image5}
            category={""}
            productName={""}
            productPrice={0}
          />
        )}
        {showCard[1] && (
          <CardProduct
            imageSrc={image2}
            category={""}
            productName={""}
            productPrice={0}
          />
        )}
        {showCard[1] && (
          <CardProduct
            imageSrc={image6}
            category={""}
            productName={""}
            productPrice={0}
          />
        )}
        {showCard[2] && (
          <CardProduct
            imageSrc={image1}
            category={""}
            productName={""}
            productPrice={0}
          />
        )}
        {showCard[2] && (
          <CardProduct
            imageSrc={image3}
            category={""}
            productName={""}
            productPrice={0}
          />
        )}
      </Wrapper>
      <Link to={"/produtos"}>
        <Button cor="#a86815" texto="Ver Mais" />
      </Link>
    </ProductsSection>
  );
};

export default Products;
