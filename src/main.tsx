import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Shop from "./pages/Shop";
import User from "./pages/User";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="user" element={<User />} />
          <Route path="produtos" element={<Produtos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
