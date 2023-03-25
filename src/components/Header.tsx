import { Button, Input, Paragraph, Select } from "dracula-ui";
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
    padding: 1rem ${theme.paddingContainer};
    background-color: #1e1f29;
    svg {
      color: ${theme.draculaPurple};
      font-size: 1rem;
      margin-right: 0.5rem;
    }
    ul {
      display: flex;
      li {
        margin-right: 1.5rem;
        display: flex;
        align-items: center;
        a {
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
    border-bottom: 4px solid ${theme.draculaPurple};
    .form-header {
      display: flex;
      align-items: center;
      .form-input {
        position: relative;
        svg {
          position: absolute;
          right: 6px;
          top: 16px;
          font-size: 24px;
        }
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
        cursor: pointer;
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
          background-color: ${theme.draculaPurple};
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
            <Phone weight="fill"></Phone>
            <Paragraph size="sm">+55 (12) 98158-0992</Paragraph>
          </li>
          <li>
            <a href="mailto:contato@electro.com">
              <Envelope weight="fill"></Envelope>
              <Paragraph size="sm">contato@electro.com</Paragraph>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/hMDFQ3zoR9mZDF5b8" target={"_blank"}>
              <MapPin weight="fill"></MapPin>
              <Paragraph size="sm">
                Rua Paulo Malschitzki, 240, Joinville - SC
              </Paragraph>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/user"}>
              <UserCircle weight="fill"></UserCircle>
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
          <Select defaultValue="default" size="medium" color="purple">
            <option value="default" disabled={true}>
              Categorias
            </option>
            <option>Laptops</option>
            <option>Smartphones</option>
            <option>Câmeras</option>
            <option>Acessórios</option>
          </Select>
          <div className="form-input">
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
            <Paragraph size="sm">
              Lista de<br></br> Desejos
            </Paragraph>
            <div className="qty">
              <Paragraph size="sm">{wishQty}</Paragraph>
            </div>
          </button>

          <button>
            <ShoppingCart></ShoppingCart>
            <Paragraph size="sm">Carrinho</Paragraph>
            <div className="qty">
              <Paragraph>{cartQty}</Paragraph>
            </div>
          </button>

          <button style={{ display: "none" }}>menu</button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
