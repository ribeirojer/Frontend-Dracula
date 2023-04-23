import styled from "styled-components";
import { Button, Heading, Paragraph } from "dracula-ui";
import { useContext, useEffect, useState } from "react";
import { CartExtract, ProductExtract } from "../interfaces/Product";
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

function Wishlist() {
  const [wishlist, setWishlist] = useState<ProductExtract[]>([]);
  const { removeFromWishlist, addToCart, cartItems } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      const parsedWishlist: ProductExtract[] = JSON.parse(wishlistData);
      setWishlist(parsedWishlist);
    }
  }, []);

  return (
    <Container>
      <Heading size="xl">Lista de Desejos</Heading>
      {wishlist.length === 0 ? (
        <>
          <Paragraph mt="md">Sua Lista de Desejos está vazia</Paragraph>
          <Button onClick={() => navigate("/shop")} mt="md" color="cyanGreen">
            Ver produtos
          </Button>
        </>
      ) : (
        <ul>
          {wishlist.map((product) => (
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
                color="animated"
                onClick={() =>
                  !!cartItems.find(
                    (item: CartExtract) => item.id === product.id
                  )
                    ? navigate("/checkout")
                    : addToCart({ id: product.id, quantity: 1 })
                }
              >
                {!!cartItems.find((item: CartExtract) => item.id === product.id)
                  ? "Finalizar compra"
                  : "Adicionar ao carrinho"}
              </Button>
              <Button
                color="purple"
                variant="outline"
                onClick={() => {
                  setWishlist(
                    wishlist.filter((item) => item.id !== product.id)
                  );
                  removeFromWishlist(product);
                }}
              >
                Não desejo mais
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default Wishlist;
