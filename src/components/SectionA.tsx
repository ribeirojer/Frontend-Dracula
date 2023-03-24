import shop01 from "../assets/shop01.png";
import shop02 from "../assets/shop03.png";
import shop03 from "../assets/shop02.png";
import styled from "styled-components";
import theme from "../utils/theme";

type Props = {};

const WrapperSectionA = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 2rem;
  img {
    width: 100%;
  }
  .card {
    background-color: #fff;
    width: 100%;
    padding: 0 1rem;
    border: 1px solid ${theme.azulclaro};
    border-radius: 1rem;

    @media (min-width: 640px) {
      width: 50%;
    }

    @media (min-width: 1024px) {
      width: 33%;
    }
  }
  .shop-body {
    position: absolute;
    top: 0;
    width: 75%;
    padding: 30px;
    z-index: 10;
  }
`;

const SectionA = (props: Props) => {
  const data = [
    {
      srcImg: shop01,
      type: "Notebooks",
    },
    {
      srcImg: shop02,
      type: "Acessórios",
    },
    {
      srcImg: shop03,
      type: "Câmeras",
    },
  ];

  return (
    <WrapperSectionA>
      {data.map((item) => {
        return (
          <div className="card">
            {/*<img src={item.srcImg} alt="" />
            <div className="shop-body">
              <h3>
                {item.type}
                <br></br>Collection
              </h3>
              <a href="#" className="cta-btn">
                Shop now <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>*/}
          </div>
        );
      })}
    </WrapperSectionA>
  );
};

export default SectionA;
