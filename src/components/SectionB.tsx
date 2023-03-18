import styled from "styled-components";
import product01 from "../assets/product01.png";
import product02 from "../assets/product02.png";
import product03 from "../assets/product03.png";
import product04 from "../assets/product04.png";
import product05 from "../assets/product05.png";
import product06 from "../assets/product06.png";
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
  }
`;

const SectionB = (props: Props) => {
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
