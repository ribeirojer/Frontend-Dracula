import {
  Anchor,
  Badge,
  Button,
  Heading,
  Input,
  Paragraph,
  Select,
} from "dracula-ui";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardProduct from "../components/CardProduct";
import Newsletter from "../components/Newsletter";
import { data } from "../utils/cardsData";
import product01 from "../assets/product01.png";
import product03 from "../assets/product03.png";
import product06 from "../assets/product06.png";
import product08 from "../assets/product08.png";
import { useEffect, useState } from "react";
import {
  Envelope,
  FacebookLogo,
  GitDiff,
  GoogleLogo,
  Star,
  TwitterLogo,
} from "phosphor-react";
import theme from "../utils/theme";
import ProductTab from "../components/ProductTab";
import { useParams, useSearchParams } from "react-router-dom";

type Props = {};

const WrapperProdutos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  .products {
    display: flex;
    flex-wrap: wrap;
  }
  .product-btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    button {
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: ${theme.dracula.white};
    }
    svg {
      fill: ${theme.dracula.white};
      height: 2rem;
    }
  }
  .tab-content {
  }
  .product-old-price {
    color: #999;
    font-size: 20px;
    line-height: 24px;
    text-decoration: line-through;
    margin-left: 10px;
  }
  .product-options {
    display: flex;
    justify-content: space-evenly;
    label {
      display: flex;
      align-items: center;
    }
  }
  .product-links,
  .product-share {
    display: flex;
    align-items: center;
  }
  textarea {
    display: block;
    font-size: var(--font-md);
    min-height: var(--spacing-40);
    padding: var(--spacing-4);
    margin-top: 1rem;
    -webkit-appearance: textfield;
    background: var(--blackSecondary);
    border: 0.3rem solid transparent;
    border-radius: var(--rounded-lg);
    box-sizing: border-box;
    outline: none;
    transition: all 0.3s ease-in-out;
    width: 100%;
    font-family: Fira Code, monospace;
    color: var(--purple);
  }
  .row {
    img {
      height: 4rem;
    }
    padding: 2rem;
    display: flex;
    #product-main-img {
      width: 20%;
    }
    #product-imgs,
    .product-details {
      width: 40%;
    }
  }
`;

const Produtos = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("X");
  const [color, setColor] = useState("Red");
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id");

  const getSearchedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `$&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <WrapperProdutos>
      <div className="row">
        <div id="product-main-img">
          <div className="product-preview">
            <img src={product01} alt="" />
          </div>

          <div className="product-preview">
            <img src={product03} alt="" />
          </div>

          <div className="product-preview">
            <img src={product06} alt="" />
          </div>

          <div className="product-preview">
            <img src={product08} alt="" />
          </div>
        </div>
        <div id="product-imgs">
          <div className="product-preview">
            <img src={product01} alt="" />
          </div>

          <div className="product-preview">
            <img src={product03} alt="" />
          </div>

          <div className="product-preview">
            <img src={product06} alt="" />
          </div>

          <div className="product-preview">
            <img src={product08} alt="" />
          </div>
        </div>
        <div className="product-details">
          <Heading>NOME DO PRODUTO VAI AQUI</Heading>
          <div>
            <div className="product-rating">
              <Star weight="fill"></Star>
              <Star weight="fill"></Star>
              <Star weight="fill"></Star>
              <Star weight="fill"></Star>
              <Star></Star>
            </div>
            <Anchor className="review-link" href="#">
              10 Comentário(s) | Adicione sua avaliação
            </Anchor>
          </div>
          <div>
            <Heading>
              $980.00 <span className="product-old-price">$990.00</span>
            </Heading>
            <Paragraph color="green" weight="bold">
              EM ESTOQUE
            </Paragraph>
          </div>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Paragraph>

          <div className="product-options">
            <label>
              TAMANHO
              <Select
                color="purple"
                className="input-select"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="X">X</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Select>
            </label>
            <label>
              COR
              <Select
                color="purple"
                className="input-select"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
              </Select>
            </label>
            <label className="qty-label">
              QUANTIDADE
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div className="add-to-cart">
            <Button>ADICIONAR AO CARRINHO</Button>
          </div>
          <ul className="product-btns">
            <Button variant="outline" color="purple" p="sm">
              <GitDiff size={32} weight="fill" />
            </Button>
            <Button variant="outline" color="purple" p="sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>
            </Button>
          </ul>
          <div className="product-links">
            <Paragraph>CATEGORIA:</Paragraph>
            <Badge variant="subtle">FONES DE OUVIDO</Badge>
            <Badge variant="subtle">ACESSÓRIOS</Badge>
          </div>
          <div className="product-share">
            <Paragraph>COMPARTILHAR:</Paragraph>
            <Anchor>
              <FacebookLogo></FacebookLogo>
            </Anchor>
            <Anchor>
              <TwitterLogo></TwitterLogo>
            </Anchor>
            <Anchor>
              <GoogleLogo></GoogleLogo>
            </Anchor>
            <Anchor>
              <Envelope></Envelope>
            </Anchor>
          </div>
        </div>
      </div>
      <ProductTab></ProductTab>
      <Heading>Produtos Relacionados</Heading>
      <div className="products">
        {data.slice(0, 4).map((item) => {
          return <CardProduct key={item.id} product={item}></CardProduct>;
        })}
      </div>
      {/*<Newsletter></Newsletter>*/}
    </WrapperProdutos>
  );
};

export default Produtos;
