import styled from 'styled-components';
import CardProduct from './CardProduct';

import image1 from '../assets/8.jpg'
import image2 from '../assets/11.jpg'
import image3 from '../assets/17.jpg'
import image4 from '../assets/25.jpg'
import image5 from '../assets/29.jpg'
import image6 from '../assets/30.jpg'

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

type Props = {}

const Products = (props: Props) => {
  return (
    <Wrapper>
        <CardProduct image={image4} title='Brincos' descript='Bricos com os mais diversos temas e estilos' price='R$ 1,00 à R$ 10,00'/>
        <CardProduct image={image5} title='Acessórios de Mesa' descript='Sua mesa com design único, as visitas vão adorar' price='R$ 10,00'/>
        <CardProduct image={image2} title='Vasos' descript='Para plantas pequenas, harmonize características das plantas ao seu vaso' price='R$ 10,00'/>
        <CardProduct image={image6} title='Decoração de parede' descript='Sua casa mais linda que as casas no Pinterest' price='R$ 10,00 à R$ 30,00'/>
        <CardProduct image={image1} title='Relógios' descript='De diversos tipos, relógios com o tema da sua empresa, ou do time do coração' price='A partir de R$ 15,00'/>
        <CardProduct image={image3} title='Imagem acrílico' descript='As pessoas adoram seus nomes, este é um presente inesquecível' price='A partir de R$ 20,00'/>
    </Wrapper>
  )
}

export default Products;