import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "dracula-ui/styles/dracula-ui.css";
import whats from "../src/assets/WhatsApp.png";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import { CartExtract, ProductExtract } from "./interfaces/Product";
import { IUser } from "./interfaces/User";
import { removeProductFromWishlist, saveProductToWishlist } from "./utils";

const WrapperWhatsapp = styled.a`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  .logo {
    width: 4rem;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: center bottom;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: rotate(-3deg) scale(0.98);
    }
    20% {
      transform: rotate(3deg) scale(1.02);
    }
    30% {
      transform: rotate(-3deg) scale(1);
    }
    40% {
      transform: rotate(3deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const UserContext = createContext<any>({});

function App() {
  const [user, setUser] = useState<IUser>();
  const [cartItems, setCartItems] = useState<CartExtract[]>([]);
  const [wishlist, setWishlist] = useState<ProductExtract[]>([]);

  useEffect(() => {
    const existingCart = localStorage.getItem("Cart");
    if (existingCart) {
      const parsedCart: CartExtract[] = JSON.parse(existingCart);
      setCartItems(parsedCart);
    }
  }, []);
  
  const addToCart = (item: CartExtract) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const addToWishlist = (item: ProductExtract) => {
    const existingItem = wishlist.find(
      (wishlistItem) => wishlistItem.id === item.id
    );
    if (!existingItem) {
      saveProductToWishlist(item);
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (product: ProductExtract) => {
    removeProductFromWishlist(product);
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        cartItems,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        setCartItems,
      }}
    >
      <Header />
      <Outlet />
      <WrapperWhatsapp
        target="_blank"
        rel="external"
        className="whats"
        href="https://api.whatsapp.com/send?phone=5547988460695&amp;text=Olá,%20tudo%20bem?"
      >
        <img src={whats} className="logo" />
      </WrapperWhatsapp>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
