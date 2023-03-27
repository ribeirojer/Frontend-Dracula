import { Checkbox, Heading, Paragraph } from "dracula-ui";
import { useState } from "react";
import styled from "styled-components";
import product01 from "../assets/product01.png";
import product02 from "../assets/product02.png";
import product03 from "../assets/product03.png";
import CardProduct from "../components/CardProduct";
import { OldPriceProduct } from "../utils/theme";
import { data } from "../utils/cardsData";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  #aside {
    width: 25%;
  }
  #store {
    width: 75%;
  }
  .product-widget {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    .product-img {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .product-body {
      width: 50%;
    }
  }
  
  .products-store {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > div {
      width: 26%;
    }
  }
`;

const Shop = (props: Props) => {
  const [laptopsChecked, setLaptopsChecked] = useState(false);
  const [smartphonesChecked, setSmartphonesChecked] = useState(false);
  const [camerasChecked, setCamerasChecked] = useState(false);
  const [accessoriesChecked, setAccessoriesChecked] = useState(false);
  const [price, setPrice] = useState(50);
  const checkboxes = [
    { id: "brand-1", label: "SAMSUNG", quantity: 578 },
    { id: "brand-2", label: "LG", quantity: 125 },
    { id: "brand-3", label: "SONY", quantity: 755 },
    { id: "brand-4", label: "SAMSUNG", quantity: 578 },
    { id: "brand-5", label: "LG", quantity: 125 },
    { id: "brand-6", label: "SONY", quantity: 755 },
  ];
  const products = [
    {
      name: "Product Name 1",
      category: "Category 1",
      price: "$980.00",
      oldPrice: "$990.00",
      image: product01,
    },
    {
      name: "Product Name 2",
      category: "Category 2",
      price: "$980.00",
      oldPrice: "$990.00",
      image: product02,
    },
    {
      name: "Product Name 3",
      category: "Category 3",
      price: "$980.00",
      oldPrice: "$990.00",
      image: product03,
    },
  ];

  return (
    <Wrapper>
      <div id="aside">
        <div className="aside">
          <Heading>Categorias</Heading>
          <div className="checkbox-filter">
            <div className="input-checkbox">
              <Checkbox
                color="purple"
                type="checkbox"
                id="category-1"
                checked={laptopsChecked}
                onChange={() => setLaptopsChecked(!laptopsChecked)}
              />
              <label htmlFor="category-1">
                <span></span>
                Laptops
                <small>(120)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <Checkbox
                color="purple"
                type="checkbox"
                id="category-2"
                checked={smartphonesChecked}
                onChange={() => setSmartphonesChecked(!smartphonesChecked)}
              />
              <label htmlFor="category-2">
                <span></span>
                Smartphones
                <small>(740)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <Checkbox
                color="purple"
                type="checkbox"
                id="category-3"
                checked={camerasChecked}
                onChange={() => setCamerasChecked(!camerasChecked)}
              />
              <label htmlFor="category-3">
                <span></span>
                Cameras
                <small>(1450)</small>
              </label>
            </div>
            <div className="input-checkbox">
              <Checkbox
                color="purple"
                type="checkbox"
                id="category-4"
                checked={accessoriesChecked}
                onChange={() => setAccessoriesChecked(!accessoriesChecked)}
              />
              <label htmlFor="category-4">
                <span></span>
                Accessories
                <small>(578)</small>
              </label>
            </div>
          </div>
        </div>
        <div className="aside">
          <Heading>PREÇO</Heading>
          <div className="price-slider">
            <input
              type="range"
              min={0}
              max={100}
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <span className="price-slider-value">${price}</span>
          </div>
        </div>
        <div className="aside">
          <Heading>Marca</Heading>
          <div className="checkbox-filter">
            {checkboxes.map((checkbox) => (
              <div key={checkbox.id} className="input-checkbox">
                <Checkbox color="purple" type="checkbox" id={checkbox.id} />
                <label htmlFor={checkbox.id}>
                  <span></span>
                  {checkbox.label}
                  <small>({checkbox.quantity})</small>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="product-list">
          <Heading>Mais Vendidos</Heading>
          {products.map((product, index) => (
            <div key={index} className="product-widget">
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-body">
                <Heading size="sm">{product.category}</Heading>
                <Heading size="md" color="purple">
                  {product.name}
                </Heading>
                <Paragraph>
                  {product.price}{" "}
                  <OldPriceProduct>{product.oldPrice}</OldPriceProduct>
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="store">
        <div className="store-filter clearfix">
          <div className="store-sort">
            <label>
              Sort By:
              <select className="input-select">
                <option value="0">Popular</option>
                <option value="1">Position</option>
              </select>
            </label>

            <label>
              Show:
              <select className="input-select">
                <option value="0">20</option>
                <option value="1">50</option>
              </select>
            </label>
          </div>
          <ul className="store-grid">
            <li className="active">
              <i className="fa fa-th"></i>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-th-list"></i>
              </a>
            </li>
          </ul>
        </div>
          
      <div className="products-store">
        {data.map((item) => {
          return (
            <CardProduct
              salePercentage={item.salePercentage}
              isNew={item.isNew}
              oldPrice={item.oldPrice}
              imageSrc={item.imgSrc}
              category={item.category}
              productName={item.productName}
              productPrice={item.productPrice}
            ></CardProduct>
          );
        })}
        </div>

        <div className="store-filter clearfix">
          <span className="store-qty">Showing 20-100 products</span>
          <ul className="store-pagination">
            <li className="active">1</li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shop;
