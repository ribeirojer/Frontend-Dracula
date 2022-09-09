import { ShoppingCart } from 'phosphor-react';
import styled from 'styled-components'
import image3 from '../assets/4.jpg'

const CardB = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cor-A);
  color: var(--cor-C);
  height: 360px;
  width: 300px;
  border-radius: 1rem;
  gap: 0.5rem;

  h2, p, span {
    margin-left: 1rem;
  }

  
`;
const ImgWrapper = styled.div`
    display: flex;
    align-items: center;

    img {
      width: 300px;
      border-radius: 1rem 1rem 0 3rem;
    }
`;
type Props = {}

const CardProduct = (props: Props) => {
  return (
    <CardB>
      <ImgWrapper>
        <img src={image3} alt="" />
      </ImgWrapper>
      <h2>Tábua de carne</h2>
      <p>tábua impressa com o desenho que você quiser</p>
      <div>
        <span>R$ 30,00</span>
        <ShoppingCart />
      </div>
    </CardB>
  )
}

export default CardProduct;