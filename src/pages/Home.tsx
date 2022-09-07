import Hero from '../components/Hero';
import LetracaixaGravacao from '../components/LetracaixaGravacao';
import ListProducts from '../components/ListProducts';
import image from '../assets/undraw_design_inspiration_re_tftx.svg'
import styled from 'styled-components'

type Props = {}

const Company = styled.section`
    display: flex;
    align-items: center;
    padding: 0 5%;
    height: 110vh;
    background-image: linear-gradient(to right, var(--cor-B), var(--cor-A));
`;
const ContactsMaps = styled.section`
    display: flex;
    align-items: center;
    padding: 0 5%;
    height: 100vh;
    background-color: var(--cor-C);
    color: var(--cor-A);
`;
const Depoiments = styled.section`
    display: flex;
    align-items: center;
    padding: 0 5%;
    height: 100vh;
    background-color: var(--cor-C);
    color: var(--cor-A);
`;
const Home = (props: Props) => {
  return (
    <>
        <Hero />
        <LetracaixaGravacao />
        <ListProducts />
        <Company>
          <img src={image} alt="" />
          <div>
            <h1>Princesa Maria</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellat magni doloribus numquam libero quos ab eaque ipsum officia itaque deleniti quaerat corporis beatae natus perspiciatis quas, repudiandae labore quae!</p>
            <button>Saiba Mais</button>
          </div>
        </Company>
        <ContactsMaps>
          <h1>Seção contato e google maps</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt ipsa odio itaque debitis id reiciendis et quam adipisci! Quasi, laborum! Neque pariatur quibusdam aliquid molestiae nulla quasi sed suscipit?</p>
        </ContactsMaps>
        <Depoiments>
          <h1>Seção contato e google maps</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt ipsa odio itaque debitis id reiciendis et quam adipisci! Quasi, laborum! Neque pariatur quibusdam aliquid molestiae nulla quasi sed suscipit?</p>
        </Depoiments>
    </>
  )
}

export default Home;