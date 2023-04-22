import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "dracula-ui/styles/dracula-ui.css";
import whats from "../src/assets/WhatsApp.png";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import { CartExtract, ProductExtract } from "./interfaces/Product";
import { IUser } from "./interfaces/User";
import {
  removeProductFromCart,
  removeProductFromCompare,
  removeProductFromWishlist,
  saveProductToCart,
  saveProductToCompare,
  saveProductToWishlist,
} from "./utils/localStorage";

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
  const [compare, setCompare] = useState<ProductExtract[]>([]);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      const parsedCart: CartExtract[] = JSON.parse(existingCart);
      setCartItems(parsedCart);
    }

    const existingWishlist = localStorage.getItem("wishlist");
    if (existingWishlist) {
      const parsedWishlist: ProductExtract[] = JSON.parse(existingWishlist);
      setWishlist(parsedWishlist);
    }

    const existingCompare = localStorage.getItem("compare");
    if (existingCompare) {
      const parsedCompare: ProductExtract[] = JSON.parse(existingCompare);
      setCompare(parsedCompare);
    }
  }, []);

  const saveUserToContext = (user: IUser) => {
    setUser(user);
  };

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
      saveProductToCart({
        id: item.id,
        quantity: item.quantity,
      });
    } else {
      setCartItems([...cartItems, item]);
      saveProductToCart({
        id: item.id,
        quantity: item.quantity,
      });
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    removeProductFromCart(itemId);
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

  const addToCompare = (item: ProductExtract) => {
    const existingItem = compare.find(
      (compareItem) => compareItem.id === item.id
    );
    if (!existingItem) {
      saveProductToCompare(item);
      setCompare([...compare, item]);
    }
  };

  const removeFromCompare = (productId: number) => {
    removeProductFromCompare(productId);
    setCompare(compare.filter((item) => item.id !== productId));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        saveUserToContext,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        compare,
        addToCompare,
        removeFromCompare,
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
