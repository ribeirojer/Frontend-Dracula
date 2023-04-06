import { useContext } from "react";
import { UserContext } from "../App";
import { ProductExtract } from "../interfaces/Product";
import { Button } from "dracula-ui";

type Props = {};

const Cart = (props: Props) => {
  const { cartItems, removeFromCart } = useContext(UserContext);

  return (
    <main>
      <h2>Carrinho de compras</h2>
      <ul>
        {cartItems.map((item: ProductExtract) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <Button color="red" onClick={() => removeFromCart(item.id)}>
              Remover
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Cart;
