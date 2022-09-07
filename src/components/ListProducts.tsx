import { ShoppingCart } from 'phosphor-react';
import styled from 'styled-components'
import image from '../assets/4.jpg'

type Props = {}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    gap: 1rem;
    background-color: var(--cor-C);
    color: var(--cor-A);
    padding-bottom: 3rem;

    h1 {
      font-family: 'Dancing Script';
      font-weight: 700;
      font-size: 3rem;
      line-height: 3.6rem;
    }
    ul {
      display: flex;
      list-style-type: none;
    }
    li {
      padding: 7px 25px;
      margin: 0 0.5rem;
      cursor: pointer;
      border-radius: 25px;
    }
    li:hover {
      color: var(--cor-C);
      background-color: var(--cor-A);
    }
`;
const Products = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`;
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
const ListProducts = (props: Props) => {
  return (
    <Wrapper>
      <h1>Nossos Produtos</h1>
      <ul>
        <li>Todos</li>
        <li>Decorativos</li>
        <li>Úteis</li>
        <li>Diversos</li>
      </ul>
      <Products>
        <CardB>
          <ImgWrapper>
            <img src={image} alt="" />
          </ImgWrapper>
          <h2>Tábua de carne</h2>
          <p>tábua impressa com o desenho que você quiser</p>
          <div>
            <span>R$ 30,00</span>
            <ShoppingCart />
          </div>
        </CardB>
        <CardB>
          <ImgWrapper>
            <img src={image} alt="" />
          </ImgWrapper>
          <h2>Tábua de carne</h2>
          <p>tábua impressa com o desenho que você quiser</p>
          <div>
            <span>R$ 30,00</span>
            <ShoppingCart />
          </div>
        </CardB>
        <CardB>
          <ImgWrapper>
            <img src={image} alt="" />
          </ImgWrapper>
          <h2>Tábua de carne</h2>
          <p>tábua impressa com o desenho que você quiser</p>
          <div>
            <span>R$ 30,00</span>
            <ShoppingCart />
          </div>
        </CardB>
      </Products>
    </Wrapper>
  )
}

export default ListProducts;