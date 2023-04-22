import { Heading } from "dracula-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { data, dataList } from "../utils/cardsData";
import CardProduct from "./CardProduct";

type Props = {
  title: string;
  startsIndex: number;
  endIndex: number;
};

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
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    .section-title ul {
      display: none;
    }
  }
`;

const SectionC = ({ title, startsIndex, endIndex }: Props) => {
  return (
    <WrapperSectionC>
      <div className="section-title">
        <Heading size="xl">{title}</Heading>
        <ul className="section-nav notShow">
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
      <div className="products" data-nav="#slick-nav-2">
        {data.slice(startsIndex, endIndex).map((item) => {
          return <CardProduct key={item.id} product={item}></CardProduct>;
        })}
      </div>
    </WrapperSectionC>
  );
};

export default SectionC;
