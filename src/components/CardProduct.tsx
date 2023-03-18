import styled from "styled-components";
import {
  cardMargin,
  cardWidthDesktop,
  cardWidthMobile,
  cardWidthTablet,
} from "../utils/theme";

type Props = {
  imageSrc: string;
  salePercentage?: number;
  isNew?: boolean;
  category: string;
  productName: string;
  productPrice: number;
  oldPrice?: number;
};

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: ${cardWidthMobile};
  padding: ${cardMargin};

  img {
    border-radius: 0.5rem;
  }
  @media (min-width: 640px) {
    width: ${cardWidthTablet};
  }

  @media (min-width: 1024px) {
    width: ${cardWidthDesktop};
  }

  button {
    border: none;
    background: transparent;
    font-size: 14px;
    color: #999;
    padding: 0;
    display: flex;
  }

  .product-rating {
    margin-bottom: 10px;

    i {
      color: #ff9800;
      font-size: 16px;
      margin-right: 5px;
    }
  }
  .product-price {
    font-size: 16px;
    font-weight: 700;
    color: #c11f2e;
    margin-bottom: 10px;

    span {
      color: #999;
      font-size: 14px;
      text-decoration: line-through;
      margin-left: 10px;
    }
  }
  .product-img {
    img {
      display: block;
      max-width: 100%;
    }
  }
  .product-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .product-old-price {
    color: #999;
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 10px;
  }
  .product-name {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const CardProduct = ({
  imageSrc,
  salePercentage,
  isNew,
  category,
  productName,
  productPrice,
  oldPrice,
}: Props) => {
  return (
    <CardContainer>
      <div className="product-img">
        <img src={imageSrc} alt="" />
        <div className="product-label">
          {salePercentage && <span className="sale">-{salePercentage}%</span>}
          {isNew && <span className="new">NEW</span>}
        </div>
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name">
          <a href="#">{productName}</a>
        </h3>
        <h4 className="product-price">
          ${productPrice.toFixed(2)}
          {oldPrice && (
            <span className="product-old-price">${oldPrice.toFixed(2)}</span>
          )}
        </h4>
        <div className="product-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="product-btns">
          <button className="add-to-wishlist">
            <i className="fa fa-heart-o"></i>
            <span className="tooltipp">add to wishlist</span>
          </button>
          <button className="add-to-compare">
            <i className="fa fa-exchange"></i>
            <span className="tooltipp">add to compare</span>
          </button>
          <button className="quick-view">
            <i className="fa fa-eye"></i>
            <span className="tooltipp">quick view</span>
          </button>
        </div>
      </div>
      <div className="add-to-cart">
        <button className="add-to-cart-btn">
          <i className="fa fa-shopping-cart"></i> add to cart
        </button>
      </div>
    </CardContainer>
  );
};

export default CardProduct;
