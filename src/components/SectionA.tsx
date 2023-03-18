import shop01 from "../assets/shop01.png";
import shop02 from "../assets/shop03.png";
import shop03 from "../assets/shop02.png";
import styled from "styled-components";

type Props = {};

const cardWidthMobile = "100%";
const cardWidthTablet = "50%";
const cardWidthDesktop = "25%";
const cardMargin = "0 1rem";

const WrapperSectionA = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`;

const Section = styled.section`
  width: ${cardWidthMobile};
  padding: ${cardMargin};

  img {
    border-radius: 0.5rem;
  }
  @media (min-width: 640px) {
    width: ${cardWidthTablet};
  }

  @media (min-width: 1024px) {
    width: ${cardWidthDesktop};
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
    {
      srcImg: shop02,
      type: "Celulares",
    },
  ];

  return (
    <WrapperSectionA>
      {data.map((item) => {
        return (
          <Section>
            <img src={item.srcImg} alt="" />
            <div className="shop-body">
              <h3>
                {item.type}
                <br></br>Collection
              </h3>
              <a href="#" className="cta-btn">
                Shop now <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </Section>
        );
      })}
    </WrapperSectionA>
  );
};

export default SectionA;
