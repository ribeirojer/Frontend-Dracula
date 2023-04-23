import { Anchor, Badge, Button, Heading, Input, Paragraph } from "dracula-ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import CardProduct from "../components/CardProduct";
import { data } from "../utils/cardsData";
import { useContext, useEffect, useState } from "react";
import {
  Envelope,
  FacebookLogo,
  GitDiff,
  GoogleLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";
import Stars from "../components/Stars";
import theme from "../utils/theme";
import ProductTab from "../components/ProductTab";
import SectionC from "../components/SectionC";
import { CartExtract, IElectronicProduct } from "../interfaces/Product";
import { UserContext } from "../App";
import { formatCurrency } from "../utils";

type Props = {};

const WrapperProdutos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  .row {
    display: flex;
    padding: 2rem;
    .product-main-img {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .product-details {
      width: 50%;
      h2 {
        line-height: 3.5rem;
      }
      .stars {
        margin-top: 1rem;
        svg {
          color: ${theme.dracula.purple};
        }
      }
      .price {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 1rem 0;
      }
      span {
        cursor: pointer;
        &:hover {
          color: ${theme.dracula.purple};
        }
      }
    }
  }
  .btns {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0;
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
    }
    svg {
      fill: ${theme.dracula.purple};
      height: 2rem;
    }
  }
  .product-old-price {
    color: #999;
    font-size: 20px;
    line-height: 24px;
    text-decoration: line-through;
    margin-left: 10px;
  }
  .product-options {
    margin: 0.5rem 0;
    display: flex;
    label {
      display: flex;
      align-items: center;
    }
    .qty-label {
      input {
        margin-left: 0.5rem;
        width: 5rem;
      }
    }
  }
  .product-links,
  .product-share {
    display: flex;
    align-items: center;
    a {
      margin: 1rem 0.2rem;
    }
  }
  .products-related {
    h2 {
      margin: 2rem 0 1rem;
      text-align: center;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      padding: 1rem;
      .product-main-img {
        width: 100%;
      }
      .product-details {
        width: 100%;
      }
    }
    .btns button {
      font-size: 0.8rem;
    }
  }
`;

const Produtos = (props: Props) => {
  const { addToCart, cartItems, addToWishlist, addToCompare } =
    useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("produtoId") as string;
  const navigate = useNavigate();
  const itemToShow: IElectronicProduct = data[parseInt(query) - 1];
  const qtdComments = itemToShow.comments?.length || 0;
  const shareUrl = `${window.location.origin}/produto?produtoId=${itemToShow.id}`;
  const priceToShow =
    itemToShow.salePercentage !== 0
      ? itemToShow.price * (1 - itemToShow.salePercentage / 100)
      : itemToShow.price;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isProductSaveToCart = !!cartItems.find(
    (item: CartExtract) => item.id === itemToShow.id
  );

  function handleGoToInput() {
    const commentButton = document.getElementById("comments");
    if (commentButton) {
      commentButton.click();
    }

    setTimeout(() => {
      const nameInput = document.getElementById("name-input");
      if (nameInput) {
        nameInput.focus();
      }
    }, 50); // tempo em milissegundos
  }

  return (
    <WrapperProdutos>
      <div className="row">
        <div className="product-main-img">
          <img src={itemToShow.image} alt="" />
        </div>
        <div className="product-details">
          <Heading size="2xl">{itemToShow.name}</Heading>
          <div className="stars drac-text">
            <Stars rating={itemToShow.rating} size={32}></Stars>
            {qtdComments} Comentário {qtdComments > 1 && "(s)"} |{" "}
            <span onClick={() => handleGoToInput()} className="review-link">
              Adicione sua avaliação
            </span>
          </div>
          <div className="price">
            <Heading color="green" size="2xl">
              {formatCurrency(priceToShow)}{" "}
              {itemToShow.salePercentage !== 0 && (
                <span className="product-old-price">
                  {formatCurrency(itemToShow.price)}
                </span>
              )}
            </Heading>
            <Paragraph weight="bold">{itemToShow.stock} EM ESTOQUE</Paragraph>
          </div>
          <Paragraph>{itemToShow.description}</Paragraph>
          <div className="product-options">
            <label className="drac-text qty-label">
              QUANTIDADE
              <Input
                color="purple"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </label>
          </div>
          <Button
            color="cyanGreen"
            size="lg"
            onClick={() =>
              isProductSaveToCart
                ? navigate("/checkout")
                : addToCart({ id: itemToShow.id, quantity: quantity })
            }
          >
            {isProductSaveToCart ? "Finalizar compra" : "ADICIONAR AO CARRINHO"}
          </Button>
          <ul className="btns">
            <Button
              onClick={() =>
                addToCompare({
                  id: itemToShow.id,
                  image: itemToShow.image,
                  name: itemToShow.name,
                  price: itemToShow.price,
                })
              }
              variant="outline"
              color="purple"
              size="lg"
            >
              <GitDiff size={32} weight="fill" /> Adicionar a comparação
            </Button>
            <Button
              onClick={() =>
                addToWishlist({
                  id: itemToShow.id,
                  image: itemToShow.image,
                  name: itemToShow.name,
                  price: itemToShow.price,
                })
              }
              variant="outline"
              color="purple"
              size="lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>{" "}
              Adicionar a Lista de Desejos
            </Button>
          </ul>
          <div className="product-links">
            <Paragraph>CATEGORIA:</Paragraph>
            <Badge variant="subtle">{itemToShow.category}</Badge>
          </div>
          <div className="product-share">
            <Paragraph>COMPARTILHAR:</Paragraph>
            <Anchor
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
            >
              <FacebookLogo size={32}></FacebookLogo>
            </Anchor>
            <Anchor
              href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
              target="_blank"
            >
              <TwitterLogo size={32}></TwitterLogo>
            </Anchor>
            <Anchor
              href={`https://plus.google.com/share?url=${shareUrl}`}
              target="_blank"
            >
              <GoogleLogo size={32}></GoogleLogo>
            </Anchor>
            <Anchor
              href={`mailto:?subject=Check%20out%20this%20product&body=${shareUrl}`}
              target="_blank"
            >
              <Envelope size={32}></Envelope>
            </Anchor>
            <Anchor
              href={`https://api.whatsapp.com/send?text=${shareUrl}`}
              target="_blank"
            >
              <WhatsappLogo size={32}></WhatsappLogo>
            </Anchor>
            <Anchor
              href={`https://www.instagram.com/?url=${shareUrl}`}
              target="_blank"
            >
              <InstagramLogo size={32}></InstagramLogo>
            </Anchor>
          </div>
        </div>
      </div>
      <ProductTab itemToShow={itemToShow}></ProductTab>
      <SectionC
        title={"Produtos Relacionados"}
        startsIndex={0}
        endIndex={4}
      ></SectionC>
    </WrapperProdutos>
  );
};

export default Produtos;
