import { Anchor, Badge, Button, Paragraph } from "dracula-ui";
import { Eye, GitDiff } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IElectronicProduct } from "../interfaces/Product";
import theme, { OldPriceProduct } from "../utils/theme";
import Stars from "./Stars";
import { useContext } from "react";
import { UserContext } from "../App";

type Props = {
  product: IElectronicProduct;
};

const Container = styled.div`
  margin: 1rem;
  padding: 2px;
  background: ${theme.dracula.purpleCyan};
  border-radius: 10px;
  width: ${theme.cardWidthMobile};
  &:hover {
    box-shadow: 0px 0px 1rem ${theme.dracula.green};
    cursor: pointer;
  }
  @media (min-width: 640px) {
    width: ${theme.cardWidthTablet};
  }

  @media (min-width: 1024px) {
    width: ${theme.cardWidthDesktop};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  background-color: ${theme.dracula.blackSecondary};
  border-radius: 8px;
  padding: 1rem;

  .product-img {
    position: relative;
    img {
      display: block;
      max-width: 100%;
    }
  }
  .product-label {
    position: absolute;
    top: 1rem;
    right: 0rem;
  }
  .anchor-title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .product-price {
    font-weight: 700;
    margin: 10px 0;
    text-align: center;

    span {
      color: #999;
      font-size: 14px;
      text-decoration: line-through;
      margin-left: 10px;
    }
  }
  .review-rating {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    svg {
      color: #80ffea;
      font-size: 1.5rem;
      margin-right: 5px;
    }
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
  .button-cart {
    font-weight: 700;
  }
`;

const CardProduct = ({ product }: Props) => {
  const { addToCart, addToWishlist, addToCompare } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Container>
      <CardContainer>
        <div className="product-img">
          <img src={product.image} alt="" />
          <div className="product-label">
            {product.salePercentage !== 0 && (
              <Badge color="animated">-{product.salePercentage}%</Badge>
            )}
            {product.isNew && (
              <Badge m="sm" color="purple" variant="outline">
                NOVO
              </Badge>
            )}
          </div>
        </div>
        <div className="product-body">
          <Paragraph className="product-category">{product.category}</Paragraph>
          <Anchor className="anchor-title" color="purple" hoverColor="pink">
            {product.name}
          </Anchor>
          <Paragraph className="product-price">
            {(
              product.price -
              (product.price * product.salePercentage) / 100
            ).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            <OldPriceProduct className="product-old-price">
              {product.salePercentage
                ? "" +
                  product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : ""}
            </OldPriceProduct>
          </Paragraph>
          <Stars rating={5} size={32}></Stars>
          <div className="product-btns">
            <Button
              onClick={() => {
                addToCompare({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                });
              }}
              variant="outline"
              color="purple"
              p="sm"
            >
              <GitDiff size={32} weight="fill" />
            </Button>
            <Button
              onClick={() => {
                addToWishlist({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                });
              }}
              variant="outline"
              color="purple"
              p="sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>
            </Button>
            <Button
              onClick={() => navigate(`/produto?produtoId=${product.id}`)}
              variant="outline"
              color="purple"
              p="sm"
            >
              <Eye size={32} />
            </Button>
          </div>
        </div>
        <Button
          onClick={() => {
            addToCart({ id: product.id, quantity: 1 });
            navigate(`/cart`);
          }}
          size="lg"
          color="purpleCyan"
        >
          Comprar
        </Button>
      </CardContainer>
    </Container>
  );
};

export default CardProduct;
