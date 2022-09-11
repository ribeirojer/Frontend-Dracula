import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CardB = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cor-A);
  color: var(--cor-C);
  width: 345px;
  border-radius: 1rem;
  gap: 1rem;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    color: var(--cor-C);
    padding: 7px 8px 2px 8px;
    background-color: var(--cor-E);
    border-radius: 50%;
    border: 1px solid var(--cor-E);
  }
  a:hover {
    color: var(--cor-E);
    background-color: var(--cor-C);
    border: 1px solid var(--cor-C);
  }
`;
const Img = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 1rem;
`;
type Props = {}

const CardProduct = ({image, title, descript, price}: {image: string, title:string, descript:string, price:string}) => {
  return (
    <CardB>
      <Img src={image} alt="" />
      <h2>{title}</h2>
      <p>{descript}</p>
      <div>
        <span>{price}</span>
        <Link to={'/shop'}><ShoppingCart size={20} weight="fill" /></Link>
      </div>
    </CardB>
  )
}

export default CardProduct;