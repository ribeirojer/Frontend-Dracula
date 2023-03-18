import shop01 from "../assets/shop01.png";
import shop02 from "../assets/shop03.png";
import shop03 from "../assets/shop02.png";
import styled from "styled-components";

type Props = {};

const WrapperSectionA = styled.section`
  display: flex;
  justify-content: center;
  .shop {
    width: 33%;
    position: relative;
    img {
      width: 100%;
    }
    .shop-body {
      position: absolute;
      top: 0;
      width: 75%;
      padding: 30px;
      z-index: 10;
    }
  }
  .shop:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    width: 60%;
    background: #d10024;
    opacity: 0.9;
    transform: skewX(-45deg);
  }
`;

const SectionA = (props: Props) => {
  return (
    <WrapperSectionA>
      <div className="shop">
        <img src={shop01} alt="" />
        <div className="shop-body">
          <h3>
            Laptop<br></br>Collection
          </h3>
          <a href="#" className="cta-btn">
            Shop now <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>

      <div className="shop">
        <div className="shop-img">
          <img src={shop02} alt="" />
        </div>
        <div className="shop-body">
          <h3>
            Accessories<br></br>Collection
          </h3>
          <a href="#" className="cta-btn">
            Shop now <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>

      <div className="shop">
        <div className="shop-img">
          <img src={shop03} alt="" />
        </div>
        <div className="shop-body">
          <h3>
            Cameras<br></br>Collection
          </h3>
          <a href="#" className="cta-btn">
            Shop now <i className="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </WrapperSectionA>
  );
};

export default SectionA;
