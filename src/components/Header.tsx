import { Box, Button, Input, Paragraph, Select } from "dracula-ui";
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
import theme from "../utils/theme";

type Props = {};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  nav {
    display: flex;
    justify-content: space-between;
    padding: ${theme.paddingContainer};
    background-color: #1e1f29;
    svg {
      color: ${theme.draculaPurple};
      font-size: 1rem;
      margin-right: 0.5rem;
    }
    ul {
      display: flex;
      li {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        a {
          color: #fff;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #15161d;
    border-bottom: 4px solid ${theme.azulclaro};

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
          background-color: ${theme.azulclaro};
        }
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  select {
    height: 40px;
    padding: 0 15px;
    border: none;
    background-color: #fff;
    border-radius: 5px;
    color: #999;
    font-size: 16px;
    width: 200px;
    margin-right: 10px;
  }

  div {
    position: relative;
  }

  input {
    height: 40px;
    padding: 0 15px;
    border: none;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    font-size: 16px;
    width: 250px;
    color: #999;
  }

  button.search-btn {
    background-color: ${theme.azulclaro};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 0 5px 5px 0;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button.search-btn:hover {
    background-color: #fff;
    color: ${theme.azulclaro};
  }

  svg {
    position: absolute;
    top: 12px;
    left: 10px;
    fill: #000;
    width: 16px;
    height: 16px;
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
            <Phone></Phone>
            <Paragraph size="sm">+55 (12) 98158-0992</Paragraph>
          </li>
          <li>
            <a href="mailto:contato@electro.com">
              <Envelope></Envelope>
              <Paragraph size="sm">contato@electro.com</Paragraph>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/hMDFQ3zoR9mZDF5b8" target={"_blank"}>
              <MapPin></MapPin>
              <Paragraph size="sm">
                Rua Paulo Malschitzki, 240, Joinville - SC
              </Paragraph>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/user"}>
              <UserCircle></UserCircle>
              <Paragraph size="sm">Minha Conta</Paragraph>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <div className="form-header">
          <Select defaultValue="default" size="medium" color="white">
            <option value="default" disabled={true}>
              Select option
            </option>
            <option>Blade</option>
            <option>Buffy</option>
            <option>Lincoln</option>
            <option>Morbius</option>
            <option>Van Helsing</option>
          </Select>
          <div>
            <MagnifyingGlass></MagnifyingGlass>
            <Input color="purple" placeholder="purple" m="xs" />
          </div>
          <Button color="purpleCyan" m="sm">
            Pesquisar
          </Button>
        </div>
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
