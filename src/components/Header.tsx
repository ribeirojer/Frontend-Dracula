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
import { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../utils/theme";
import Logo from "./Logo";
import { UserContext } from "../App";

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
      color: ${theme.dracula.purple};
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
    a {
      display: flex;
      color: #fff;
    }
    background-color: #15161d;
    border-bottom: 4px solid ${theme.dracula.purple};
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
          background-color: ${theme.dracula.purple};
        }
      }
    }
  }
`;

const Header = (props: Props) => {
  const { cartItems, wishlist, user } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      if (!searchValue) return;

      navigate(`/shop?q=${searchValue}`, { replace: true });
      setSearchValue("");
    },
    [searchValue]
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/shop?c=${event.target.value}`);
  };

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5512981580992&amp;text=Olá,%20Drácula!"
              target={"_blank"}
            >
              <Phone weight="fill"></Phone>
              <Paragraph size="sm">+55 (12) 98158-0992</Paragraph>
            </a>
          </li>
          <li>
            <a href="mailto:contato@electro.com" target={"_blank"}>
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
              <Paragraph size="sm" mr="xs">
                {user ? user.name : "Minha Conta"}
              </Paragraph>
              <UserCircle weight="fill"></UserCircle>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header">
        <Link to={"/"}>
          <Logo></Logo>
        </Link>
        <form onSubmit={handleSubmit} className="form-header">
          <Select
            defaultValue="default"
            size="medium"
            color="purple"
            onChange={handleSelectChange}
          >
            <option value="default" disabled>
              Categorias
            </option>
            <option value="Laptops">Laptops</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Câmeras">Câmeras</option>
            <option value="Acessórios">Acessórios</option>
          </Select>
          <div className="form-input">
            <MagnifyingGlass></MagnifyingGlass>
            <Input
              color="purple"
              placeholder="Busca pelo nome"
              m="xs"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
          <Button color="purpleCyan" m="sm" onClick={handleSubmit}>
            Pesquisar
          </Button>
        </form>
        <div className="header-ctn">
          <button onClick={() => navigate("/wishlist")}>
            <Heart></Heart>
            <Paragraph size="sm">
              Lista de<br></br> Desejos
            </Paragraph>
            <div className="qty drac-text">
              {wishlist.length ? wishlist.length : 0}
            </div>
          </button>
          <button onClick={() => navigate("/checkout")}>
            <ShoppingCart></ShoppingCart>
            <Paragraph size="sm">Carrinho</Paragraph>
            <div className="qty drac-text">
              {cartItems.length ? cartItems.length : 0}
            </div>
          </button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
