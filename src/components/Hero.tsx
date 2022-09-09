import styled from 'styled-components'
import image from '../assets/rvore-geneal-gica-de-madeira-rvore-geneal-gica-livre.jpg'

type Props = {}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 8%;
    height: 100vh;
    background-image: linear-gradient(to right, var(--cor-A), var(--cor-B));
`;
const Carrousel = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    h1 {
      font-family: 'Dancing Script';
      font-size: 3rem;
      line-height: 3.6rem;
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0.5rem 0;
    }
`;
const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    align-items: flex-end;

    img {
      height: 500px;
      width: 550px;
    }
`;

const Hero = (props: Props) => {
  return (
    <Wrapper>
      <Carrousel>
        <h1>Princesa Maria</h1>
        <p>Somos uma loja especializada em artigos decorativos e presentes feitos com corte e impressão a laser, trabalhamos com acrílicos, MDF e madeiras finas.</p>
        <p>Quer presentear alguém? aqui é o lugar certo!</p>
      </Carrousel>
      <ImgWrapper>
        <img src={image} alt="main_image" />
      </ImgWrapper>
    </Wrapper>
  )
}

export default Hero;