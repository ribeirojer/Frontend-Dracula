import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { CartExtract } from "../interfaces/Product";
import { Badge, Button, Heading, Paragraph } from "dracula-ui";
import { data } from "../utils/cardsData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      max-width: 300px;
      img {
        max-width: 100%;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

const Cart = (props: Props) => {
  const { cartItems, removeFromCart, setCartItems } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateCartItemQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setCartItems(
        cartItems.map((item: CartExtract) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <Main>
      <Heading size="xl">Carrinho de compras</Heading>
      <ul>
        {cartItems && cartItems.length ? (
          cartItems.map((item: CartExtract) => (
            <li key={item.id}>
              <img src={data[item.id - 1].image} alt="" />
              <Heading>{data[item.id - 1].name}</Heading>
              <div>
                <Button
                  disabled={item.quantity <= 0}
                  onClick={() =>
                    updateCartItemQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </Button>
                <Badge variant="subtle">{item.quantity}</Badge>
                <Button
                  onClick={() =>
                    updateCartItemQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </Button>
              </div>
              <Button
                variant="ghost"
                color="red"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </Button>
            </li>
          ))
        ) : (
          <Paragraph mt="md">Ainda não há produtos no carrinho</Paragraph>
        )}
      </ul>
      <Button
        onClick={() =>
          cartItems && cartItems.length
            ? navigate("/checkout")
            : navigate("/shop")
        }
        mt="md"
        color="cyanGreen"
      >
        {cartItems && cartItems.length
          ? "Prosseguir para checkout"
          : "Ver produtos"}
      </Button>
    </Main>
  );
};

export default Cart;
