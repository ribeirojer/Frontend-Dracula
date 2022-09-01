import styled from 'styled-components'
import image from '../assets/rvore-geneal-gica-de-madeira-rvore-geneal-gica-livre.jpg'

type Props = {}

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`;
const Img = styled.img`
    height: 100vh;
`;

const Hero = (props: Props) => {
  return (
    <Wrapper>
      <div>
        <h1>título</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, cupiditate nisi nihil fugit rem ratione velit modi culpa repudiandae laboriosam? At praesentium, magni officiis aliquam facere quas amet ipsam autem!</p>
      </div>
      <Img src={image} alt="main_image" />
    </Wrapper>
  )
}

export default Hero;