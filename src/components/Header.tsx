import {
  Envelope,
  Heart,
  MagnifyingGlass,
  MapPin,
  Phone,
  ShoppingCart,
  UserCircle,
} from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { azulclaro } from "../utils/theme";

type Props = {};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 0.75rem;
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    background-color: #1e1f29;
    svg {
      color: ${azulclaro};
      font-size: 1rem;
      margin-right: 0.5rem;
    }
    li {
      margin-right: 1rem;
      display: flex;
      align-items: center;
      a {
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #15161d;
    border-bottom: 4px solid ${azulclaro};
    form {
      display: flex;
      align-items: center;
      select {
        padding: 1rem;
        height: 3rem;
        border-radius: 1.5rem 0 0 1.5rem;
      }
      div {
        position: relative;
        input {
          height: 3rem;
          z-index: 2;
        }
        svg {
          position: absolute;
          top: 1px;
          left: 1px;
          z-index: 10;
        }
      }
      button {
        border-radius: 0 1.5rem 1.5rem 0;
        height: 3rem;
        font-weight: bold;
        padding: 0 1rem;
        background-color: ${azulclaro};
        color: #fff;
        cursor: pointer;
      }
    }
    .header-ctn {
      display: flex;
      align-items: center;
      gap: 2rem;
      button {
        background-color: transparent;
        color: #fff;
        border: none;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
          font-size: 2rem;
        }
        .qty {
          position: absolute;
          top: 0px;
          font-weight: bold;
          right: 0px;
          padding: 0.1rem 0.5rem 0;
          border-radius: 1rem;
          background-color: ${azulclaro};
        }
      }
    }
  }
`;

const Header = (props: Props) => {
  const [cartQty, setCartQty] = useState(0);
  const [wishQty, setWishQty] = useState(0);
  const navigate = useNavigate();
  function handleSubmit(q: string): void {
    navigate("/produtos");
  }

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Phone></Phone> +55 (12) 98158-0992
          </li>
          <li>
            <a href="mailto:contato@electro.com">
              <Envelope></Envelope> contato@electro.com
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/hMDFQ3zoR9mZDF5b8" target={"_blank"}>
              <MapPin></MapPin> Rua Paulo Malschitzki, 240, Joinville - SC
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/user"}>
              <UserCircle></UserCircle> Minha Conta
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <form>
          <select>
            <option value="0">Todas Categorias</option>
            <option value="1">Category 01</option>
            <option value="1">Category 02</option>
          </select>
          <div>
            <MagnifyingGlass></MagnifyingGlass>
            <input placeholder="Search here" />
          </div>
          <button className="search-btn">Busca</button>
        </form>

        <div className="header-ctn">
          <button>
            <Heart></Heart>
            <span>
              Lista de<br></br> Desejos
            </span>
            <div className="qty">{wishQty}</div>
          </button>

          <button>
            <ShoppingCart></ShoppingCart>
            <span>Carrinho</span>
            <div className="qty">{cartQty}</div>
          </button>

          <button style={{ display: "none" }}>menu</button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
