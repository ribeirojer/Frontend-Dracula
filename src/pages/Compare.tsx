import styled from "styled-components";
import { Button, Heading, Paragraph } from "dracula-ui";
import { useContext, useEffect, useState } from "react";
import { CartExtract, ProductExtract } from "../interfaces/Product";
import { removeProductFromCompare } from "../utils";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin-top: 1rem;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  img {
    max-width: 100%;
  }
`;

type Props = {};

const Compare = (props: Props) => {
  const [compare, setCompare] = useState<ProductExtract[]>([]);
  const { addToCart, cartItems } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const CompareData = localStorage.getItem("compare");
    if (CompareData) {
      const parsedCompare: ProductExtract[] = JSON.parse(CompareData);
      setCompare(parsedCompare);
    }
  }, []);

  return (
    <Container>
      <Heading size="xl">Comparativo de Produtos</Heading>
      {compare.length === 0 ? (
        <Paragraph>Selecione dois produtos para compará-los</Paragraph>
      ) : (
        <ul>
          {compare.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <Heading>{product.name}</Heading>
                <Heading color="cyanGreen">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Heading>
              </div>
              <Button
                onClick={() =>
                  !!cartItems.find(
                    (item: CartExtract) => item.id === product.id
                  )
                    ? navigate("/checkout")
                    : addToCart({ id: product.id, quatity: 1 })
                }
                color="animated"
              >
                {!!cartItems.find((item: CartExtract) => item.id === product.id)
                  ? "Finalizar compra"
                  : "Adicionar ao carrinho"}
              </Button>
              <Button
                color="purple"
                variant="outline"
                onClick={() => {
                  setCompare(compare.filter((item) => item.id !== product.id));
                  removeProductFromCompare(product.id);
                }}
              >
                Remover da Comparação
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Compare;
