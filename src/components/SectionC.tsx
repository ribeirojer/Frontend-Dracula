import styled from "styled-components";
import product01 from "../assets/product01.png";
import product02 from "../assets/product02.png";
import product03 from "../assets/product03.png";
import product04 from "../assets/product04.png";
import product05 from "../assets/product05.png";
import product06 from "../assets/product06.png";
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
  }
`;

const SectionC = (props: Props) => {
  const data = [
    {
      imgSrc: product01,
      salePercentage: 0,
      isNew: false,
      category: "Notebook",
      productName: "Asus",
      productPrice: 2000,
      oldPrice: 0,
    },
    {
      imgSrc: product02,
      salePercentage: 0,
      isNew: false,
      category: "Notebook",
      productName: "Asus",
      productPrice: 2000,
      oldPrice: 0,
    },
    {
      imgSrc: product03,
      salePercentage: 0,
      isNew: false,
      category: "Notebook",
      productName: "Asus",
      productPrice: 2000,
      oldPrice: 0,
    },
    {
      imgSrc: product04,
      salePercentage: 0,
      isNew: false,
      category: "Notebook",
      productName: "Asus",
      productPrice: 2000,
      oldPrice: 0,
    },
    {
      imgSrc: product05,
      salePercentage: 0,
      isNew: false,
      category: "Notebook",
      productName: "Asus",
      productPrice: 2000,
      oldPrice: 0,
    },
    {
      imgSrc: product06,
      salePercentage: 0,
      isNew: false,
      category: "Notebook",
      productName: "Asus",
      productPrice: 2000,
      oldPrice: 0,
    },
  ];

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
