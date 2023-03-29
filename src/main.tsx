import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import User from "./pages/User";
import "./index.css";
import Wishlist from "./pages/WishList";
import Compare from "./pages/Compare";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produtos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />{" "}
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
