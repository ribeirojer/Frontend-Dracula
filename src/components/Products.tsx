import styled from 'styled-components';
import CardProduct from './CardProduct';

import image1 from '../assets/8.jpg'
import image2 from '../assets/11.jpg'
import image3 from '../assets/17.jpg'
import image4 from '../assets/25.jpg'
import image5 from '../assets/29.jpg'
import image6 from '../assets/30.jpg'
import Button from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 84%;
`;
const ProductsSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 3rem;

    li {
      padding: 7px 25px;
      margin: 0 0.5rem;
      cursor: pointer;
      border-radius: 25px;
      transition: 0.3s;
    }
    li:hover {
      color: var(--cor-C);
      background-color: var(--cor-A);
    }
`;
type Props = {}

const Products = (props: Props) => {

  const [showCard, setShowCard] = useState([true, true, true])

  return (
    <ProductsSection>
      <h1>Nossos Produtos</h1>
      <ul>
        <li onClick={()=>setShowCard([true, true, true])}>Todos</li>
        <li onClick={()=>setShowCard([false, true, true])}>Decorativos</li>
        <li onClick={()=>setShowCard([true, false, true])}>Úteis</li>
        <li onClick={()=>setShowCard([true, true, false])}>Personalizados</li>
      </ul>
      <Wrapper>
        {showCard[0] && <CardProduct image={image4} title='Brincos' descript='Bricos com os mais diversos temas e estilos' price='R$ 1,00 à R$ 10,00'/>}
        {showCard[0] && <CardProduct image={image5} title='Acessórios de Mesa' descript='Sua mesa com design único, as visitas vão adorar' price='R$ 10,00'/>}
        {showCard[1] && <CardProduct image={image2} title='Vasos' descript='Para plantas pequenas, harmonize características das plantas ao seu vaso' price='R$ 10,00'/>}
        {showCard[1] && <CardProduct image={image6} title='Decoração de parede' descript='Sua casa mais linda que as casas no Pinterest' price='R$ 10,00 à R$ 30,00'/>}
        {showCard[2] && <CardProduct image={image1} title='Relógios' descript='De diversos tipos, relógios com o tema da sua empresa, ou do time do coração' price='A partir de R$ 15,00'/>}
        {showCard[2] && <CardProduct image={image3} title='Imagem acrílico' descript='As pessoas adoram seus nomes, este é um presente inesquecível' price='A partir de R$ 20,00'/>}
      </Wrapper>
      <Link to={'/produtos'}><Button cor='#a86815' texto='Ver Mais'/></Link>
    </ProductsSection>
  )
}

export default Products;