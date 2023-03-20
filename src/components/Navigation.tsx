import styled from "styled-components";

type Props = {};

const WrapperNavigation = styled.section`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-bottom: 2px solid #e4e7ed;
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

const Navigation = (props: Props) => {
  return (
    <WrapperNavigation>
      <ul className="main-nav nav navbar-nav">
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Hot Deals</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Laptops</a>
        </li>
        <li>
          <a href="#">Smartphones</a>
        </li>
        <li>
          <a href="#">Cameras</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
      </ul>
    </WrapperNavigation>
  );
};

export default Navigation;
