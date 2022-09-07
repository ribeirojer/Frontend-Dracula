import Hero from '../components/Hero';
import LetracaixaGravacao from '../components/LetracaixaGravacao';
import ListProducts from '../components/ListProducts';

type Props = {}

const Home = (props: Props) => {
  return (
    <>
        <Hero />
        <LetracaixaGravacao />
        <ListProducts />
    </>
  )
}

export default Home;