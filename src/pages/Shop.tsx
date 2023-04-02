import { Checkbox, Heading, Input, Paragraph, Select } from "dracula-ui";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardProduct from "../components/CardProduct";
import { OldPriceProduct } from "../utils/theme";
import { data } from "../utils/cardsData";
import { Link, useSearchParams } from "react-router-dom";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  #aside {
    padding: 2rem 0 0 2rem;
    width: 25%;
    .aside {
      margin-bottom: 1rem;
      h2 {
        text-align: center;
        margin-bottom: 1rem;
      }
      .price-slider {
        display: flex;
        margin-bottom: -1rem;
        justify-content: space-between;
      }
    }
  }
  #store {
    width: 75%;
  }
  .product-list {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .product-widget {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product-img {
        width: 40%;
        img {
          width: 100%;
        }
      }
      .product-body {
        width: 60%;
      }
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
  const [searchParams] = useSearchParams();
  const category = searchParams.get("c");
  const query = searchParams.get("q");
  const checkboxes = ["SAMSUNG", "LG", "SONY"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    category === "Laptops" && setLaptopsChecked(true);
    category === "Smartphones" && setSmartphonesChecked(true);
    category === "Câmeras" && setCamerasChecked(true);
    category === "Acessórios" && setAccessoriesChecked(true);
  }, [category]);

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
          <div className="price-slider">
            <Heading>Preço</Heading>
            <Heading color="purple">R${price}</Heading>
          </div>
          <Input
            type="range"
            step={50}
            min={0}
            max={5000}
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </div>
        <div className="aside">
          <Heading>Marca</Heading>
          <div className="checkbox-filter">
            {checkboxes.map((checkbox) => (
              <div key={checkbox} className="input-checkbox">
                <Checkbox color="purple" type="checkbox" id={checkbox} />
                <label className="drac-text" htmlFor={checkbox}>
                  {checkbox}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="product-list">
          <Heading className="text-center">Mais Vendidos</Heading>
          {data.slice(0, 3).map((product) => (
            <div key={product.id} className="product-widget">
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-body">
                <Heading size="xs">{product.category}</Heading>
                <Link className="drac-text drac-text-purple drac-text-bold" to={`/produto?produtoId=${product.id}`}>
                  {product.name}
                </Link>
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
