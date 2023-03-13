import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "../assets/rvore-geneal-gica-de-madeira-rvore-geneal-gica-livre.jpg";
import image2 from "../assets/6248ae73cf0ddd13b383a5cb829f99ba.jpg";
import image3 from "../assets/corte-e-gravacao-laser-mdf-e-acrilico-01.jpg";
import image4 from "../assets/undraw_design_inspiration_re_tftx.svg";

import Button from "../components/Button";
import CardProduct from "../components/CardProduct";
import Products from "../components/Products";

type Props = {};

const HeroSection = styled.section`
  background-image: linear-gradient(to right, var(--cor-A), var(--cor-B));
  color: var(--cor-C);
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8%;
  height: 100vh;
`;
const Carrousel = styled.div`
  width: 52%;
  p {
    margin: 1rem 0;
  }
`;
const ImgHero = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 500px;
  width: 550px;
`;
const CorteImpressaoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 8%;
  gap: 3rem;
`;
const ImgL = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const CardA = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: var(--cor-A);
  color: var(--cor-C);
  padding: 1rem;
  border-radius: 0.5rem;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;
const CompanySection = styled.section`
  color: var(--cor-C);
  background-image: linear-gradient(to right, var(--cor-B), var(--cor-A));
  display: flex;
  align-items: center;
  padding: 0 8%;
  height: 110vh;
  p {
    margin: 1rem 0;
  }
`;
const ContactsMaps = styled.section`
  padding: 90px 8%;
  height: 100vh;

  h1 {
    margin-bottom: 25px;
  }
  div {
    display: flex;
    gap: 2rem;
  }
  input,
  textarea {
    width: 100%;
    height: 50px;
    margin-bottom: 25px;
    padding-left: 16px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
  textarea {
    height: 194px;
    padding: 16px 16px;
  }
  div iframe {
    width: 50%;
    height: 345px;
    border-radius: 10px;
    border: 1px solid var(--cor-B);
  }
`;
const Depoiments = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8%;
  height: 100vh;
`;
const DWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cor-A);
  color: var(--cor-C);
`;

const Home = (props: Props) => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, error!
      Quasi, corporis at maxime ipsa tempora nesciunt velit nulla, magni
      accusantium culpa illo repellendus nemo voluptates nam? Aliquam, minus
      alias?
    </p>
  );
};
export default Home;
