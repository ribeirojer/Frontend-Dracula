import { Checkbox, Heading, Paragraph, Select } from "dracula-ui";
import { useEffect, useState } from "react";
import styled from "styled-components";
import product01 from "../assets/product01.png";
import product02 from "../assets/product02.png";
import product03 from "../assets/product03.png";
import CardProduct from "../components/CardProduct";
import { OldPriceProduct } from "../utils/theme";
import { data } from "../utils/cardsData";
import { useSearchParams } from "react-router-dom";

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
  .store-sort {
    margin: 2rem 0 1rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    label {
      display: flex;
      gap: 0.5rem;
      align-items: center;
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

  const [searchParams] = useSearchParams();
  const category = searchParams.get("c");
  const query = searchParams.get("q");

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
              <label className="drac-text" htmlFor="category-1">
                Laptops
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
              <label className="drac-text" htmlFor="category-2">
                Smartphones
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
              <label className="drac-text" htmlFor="category-3">
                Câmeras
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
              <label className="drac-text" htmlFor="category-4">
                Acessórios
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
                  {checkbox.label}({checkbox.quantity})
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
        <div className="store-sort">
          {query && (
            <div className="drac-text">
              Você pesquisou por:{" "}
              <span className="drac-text-purple">{query}</span>
            </div>
          )}
          <label className="drac-text">
            Ordenar por:
            <Select className="input-select">
              <option value="0">Popular</option>
              <option value="1">Preço</option>
            </Select>
          </label>
          <label className="drac-text">
            Mostrar:
            <Select className="input-select">
              <option value="0">6</option>
              <option value="1">12</option>
            </Select>
          </label>
        </div>

        <div className="products-store">
          {data.map((item) => {
            return <CardProduct key={item.id} product={item}></CardProduct>;
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
