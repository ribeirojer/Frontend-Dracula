import styled from 'styled-components'
import image1 from '../assets/6248ae73cf0ddd13b383a5cb829f99ba.jpg'
import image2 from '../assets/corte-e-gravacao-laser-mdf-e-acrilico-01.jpg'

type Props = {}

const Wrapper = styled.section`
    background-color: #fff;
    color: #213547;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const LetracaixaGravacao = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <Img src={image1} alt="imagem_letra_caixa" />
        <h1>título</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, cupiditate nisi nihil fugit rem ratione velit modi culpa repudiandae laboriosam? At praesentium, magni officiis aliquam facere quas amet ipsam autem!</p>
      </div>
        <div>
          <Img src={image2} alt="imagem_letra_caixa" />
          <h1>título</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, cupiditate nisi nihil fugit rem ratione velit modi culpa repudiandae laboriosam? At praesentium, magni officiis aliquam facere quas amet ipsam autem!</p>
        </div>
    </Wrapper>
  )
}

export default LetracaixaGravacao;