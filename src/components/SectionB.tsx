import styled from "styled-components";
import product01 from "../assets/product01.png";
import product02 from "../assets/product02.png";
import product03 from "../assets/product03.png";
import product04 from "../assets/product04.png";
import product05 from "../assets/product05.png";
import product06 from "../assets/product06.png";
import { data } from "../utils/cardsData";
import CardProduct from "./CardProduct";

type Props = {};

const WrapperSectionB = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .section-title {
    display: flex;
    justify-content: space-between;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SectionB = (props: Props) => {
  return (
    <WrapperSectionB>
      <div className="section-title">
        <h3 className="title">New Products</h3>
        <div className="section-nav">
          <ul className="section-tab-nav tab-nav">
            <li className="active">
              <a data-toggle="tab" href="#tab1">
                Laptops
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">
                Smartphones
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">
                Cameras
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="products">
        {data.slice(0, 4).map((item) => {
          return (
            <CardProduct
              imageSrc={item.imgSrc}
              category={item.category}
              productName={item.productName}
              productPrice={item.productPrice}
            ></CardProduct>
          );
        })}
      </div>
    </WrapperSectionB>
  );
};

export default SectionB;
