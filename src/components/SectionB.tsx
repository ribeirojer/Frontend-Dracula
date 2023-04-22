import { Heading } from "dracula-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data, dataList } from "../utils/cardsData";
import CardProduct from "./CardProduct";

type Props = {};

const WrapperSectionB = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

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
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SectionB = (props: Props) => {
  return (
    <WrapperSectionB>
      <div className="section-title">
        <Heading size="xl"></Heading>
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

      <div className="products">
        {data.slice(0, 4).map((item) => {
          return <CardProduct key={item.id} product={item}></CardProduct>;
        })}
      </div>
    </WrapperSectionB>
  );
};

export default SectionB;
