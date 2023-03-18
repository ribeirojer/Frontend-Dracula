import styled from "styled-components";
import background from "../assets/hotdeal.png";

type Props = {};

const WrapperHotDealSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #fff;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .hot-deal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 1.5;

    h2,
    p,
    a {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      li {
        margin: 0 10px;
        font-size: 24px;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          h3 {
            font-size: 50px;
            font-weight: bold;
            margin: 0;
            padding: 0;
          }
          span {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
`;

const HotDealSection = (props: Props) => {
  return (
    <WrapperHotDealSection>
      <img src={background} alt="" />
      <div className="hot-deal">
        <ul className="hot-deal-countdown">
          <li>
            <div>
              <h3>02</h3>
              <span>Days</span>
            </div>
          </li>
          <li>
            <div>
              <h3>10</h3>
              <span>Hours</span>
            </div>
          </li>
          <li>
            <div>
              <h3>34</h3>
              <span>Mins</span>
            </div>
          </li>
          <li>
            <div>
              <h3>60</h3>
              <span>Secs</span>
            </div>
          </li>
        </ul>
        <h2 className="text-uppercase">hot deal this week</h2>
        <p>New Collection Up to 50% OFF</p>
        <a className="primary-btn cta-btn" href="#">
          Shop now
        </a>
      </div>
    </WrapperHotDealSection>
  );
};

export default HotDealSection;
