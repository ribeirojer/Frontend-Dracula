import { Heading } from "dracula-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data, dataList } from "../utils/cardsData";
import CardProduct from "./CardProduct";

type Props = {};

const WrapperSectionC = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .section-title {
    padding: 0 2rem 2rem;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      li {
        list-style-type: none;
        margin-left: 1rem;
      }
    }
  }
  .products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .products-slick {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SectionC = (props: Props) => {

  return (
    <WrapperSectionC>
      <div className="section-title">
        <Heading size="xl">Mais Vendidos</Heading>
        <ul className="section-nav">
          {dataList.map((item) => {
            return (
              <li key={item.link} className="active">
                <Link className="drac-text drac-text-white" to={item.link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="products-slick" data-nav="#slick-nav-2">
        {data.slice(4, 8).map((item) => {
          return (
            <CardProduct
              key={item.id}
              product={item}
            ></CardProduct>
          );
        })}
      </div>
    </WrapperSectionC>
  );
};

export default SectionC;
