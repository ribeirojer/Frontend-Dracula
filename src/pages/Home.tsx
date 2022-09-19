import styled from 'styled-components'
import { Link } from 'react-router-dom';

import image from '../assets/rvore-geneal-gica-de-madeira-rvore-geneal-gica-livre.jpg'
import image2 from '../assets/6248ae73cf0ddd13b383a5cb829f99ba.jpg'
import image3 from '../assets/corte-e-gravacao-laser-mdf-e-acrilico-01.jpg'
import image4 from '../assets/undraw_design_inspiration_re_tftx.svg'

import Button from '../components/Button';
import CardProduct from '../components/CardProduct';
import Products from '../components/Products';

type Props = {}

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
    input, textarea {
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
    input[type="text"], input[type="email"], textarea {
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
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
    <>
      <HeroSection>
        <Carrousel>
          <h1>Princesa Maria</h1>
          <p>Somos uma loja especializada em artigos decorativos e presentes feitos com corte e impressão a laser, trabalhamos com acrílicos, MDF e madeiras finas.</p>
          <p>Quer presentear alguém? aqui é o lugar certo!</p>
          <Link to={'/produtos'}><Button cor='' texto='Ver produtos'/></Link>
        </Carrousel>
        <ImgHero src={image} alt="main_image" />
      </HeroSection>
      <CorteImpressaoSection>
        <CardA>
          <ImgL src={image2} alt="imagem_letra_caixa" />
          <CardInfo>
            <h2>Corte</h2>
            <p>Laboratório de corte, escolha o texto e a fonte da letra caixa do seu próprio jeito.</p>
            <Link to={"/corte"}>
              <Button cor='#a86815' texto='Experimentar'/>
            </Link>
          </CardInfo>
        </CardA>
        <CardA>
          <ImgL src={image3} alt="imagem_letra_caixa" />
          <CardInfo>
            <h2>Impressão</h2>
            <p>Laboratório de impressão, envie suas imagens e altere o tamanho deixando do seu próprio jeito.</p>
            <Link to={"/impressao"}>
              <Button cor='#a86815' texto='Experimentar'/>
            </Link>
          </CardInfo>
        </CardA>
      </CorteImpressaoSection>
      <Products></Products>
      <CompanySection>
        <img src={image4} alt="" />
        <div>
          <h1>Princesa Maria</h1>
          <p>Somos uma loja especializada em artigos decorativos e presentes feitos com corte e impressão a laser, trabalhamos com acrílicos, MDF e madeiras finas.</p>
          <Link to={'/maria'}><Button cor='' texto='Saiba Mais'/></Link>
        </div>
      </CompanySection>
      <ContactsMaps>
        <h1>Entre em contato</h1>
        <div>
          <form action="">
              <input type="text" placeholder="Seu Nome"/>
              <input type="email" placeholder="Seu E-mail"/>
              <textarea placeholder="Comentário..."></textarea>
          </form>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23794.594973182444!2d-48.84988049039123!3d-26.25560995099244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaff6766822b412e1!2sUdesc%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1662576883382!5m2!1spt-BR!2sbr" width="600" height="450"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>{/*style="border:0;"*/}
        </div>
        <Button cor='' texto='Enviar'/>
      </ContactsMaps>
      <Depoiments>
        <h1>O que nossos clientes dizem:</h1>
        <DWrapper>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis tenetur repellendus blanditiis provident, ipsum iusto deserunt cum, a ullam, minima vitae numquam animi asperiores delectus fugiat harum repellat quasi assumenda.</p>
            <h3>José Eduardo</h3>
            <p>Dono de Padaria</p>
          </div>
          <div>
            <ImgL src={image2} alt="imagem_letra_caixa" />
          </div>
        </DWrapper>
      </Depoiments>
    </>
  )
}
export default Home;