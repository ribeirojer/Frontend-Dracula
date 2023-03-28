import styled from "styled-components";
import { Button, Heading, Paragraph } from "dracula-ui";
import { useEffect, useState } from "react";
import { ProductExtract } from "../interfaces/Product";
import { removeProductFromWishlist } from "../utils";

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

  useEffect(() => {
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      const parsedWishlist = JSON.parse(wishlistData);
      setWishlist(parsedWishlist);
    }
  }, [wishlist]);

  return (
    <Container>
      <Heading size="xl">Lista de Desejos</Heading>
      {wishlist.length === 0 ? (
        <Paragraph>Sua Lista de Desejos está vazia</Paragraph>
      ) : (
        <ul>
          {wishlist.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <Heading>{product.name}</Heading>
                <Paragraph>{product.price}</Paragraph>
              </div>
              <Button color="animated" onClick={() => removeProductFromWishlist(product)}>
                Adicionar ao Carrinho
              </Button>
              <Button color="purple" variant="outline" onClick={() => removeProductFromWishlist(product)}>
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
