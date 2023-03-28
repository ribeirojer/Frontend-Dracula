import { Heading, Paragraph } from "dracula-ui";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      const parsedWishlist = JSON.parse(wishlistData);
      setWishlist(parsedWishlist);
    }
  }, []);

  return (
    <div>
      <Heading size="lg">Lista de Desejos</Heading>
      {wishlist.length === 0 ? (
        <Paragraph>Sua Lista de Desejos está vazia</Paragraph>
      ) : (
        <ul>
          {wishlist.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
