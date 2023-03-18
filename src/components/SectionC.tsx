import styled from "styled-components";
import { data } from "../utils/cardsData";
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        <h3 className="title">Top selling</h3>
        <div className="section-nav">
          <ul className="section-tab-nav tab-nav">
            <li className="active">
              <a data-toggle="tab" href="#tab2">
                Laptops
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab2">
                Smartphones
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab2">
                Cameras
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab2">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="products-slick" data-nav="#slick-nav-2">
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
    </WrapperSectionC>
  );
};

export default SectionC;
