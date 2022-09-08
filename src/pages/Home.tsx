import Hero from '../components/Hero';
import LetracaixaGravacao from '../components/LetracaixaGravacao';
import ListProducts from '../components/ListProducts';
import image from '../assets/undraw_design_inspiration_re_tftx.svg'
import styled from 'styled-components'
import Button from '../components/Button';

type Props = {}

const Company = styled.section`
    display: flex;
    align-items: center;
    padding: 0 5%;
    height: 110vh;
    background-image: linear-gradient(to right, var(--cor-B), var(--cor-A));

    h1 {
      font-family: 'Dancing Script';
    }

`;
const ContactsMaps = styled.section`
    padding: 90px 5%;
    height: 100vh;
    background-color: var(--cor-C);
    color: var(--cor-A);

    h2 {
      font-family: 'Dancing Script';
      font-size: 2.5rem;
      line-height: 3rem;
      font-weight: 700;
      margin-bottom: 25px;
    }
    div {
      display: flex;
      gap: 2rem;
    }
    input, textarea {
      width: 100%;
      border: none;
      height: 50px;
      margin-bottom: 25px;
      padding-left: 16px;
      border: 1px solid #999;
      outline: none;
      color: #000000;
      border-radius: 5px;
      outline: none;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    input[type="text"], input[type="email"], textarea {
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
      font-size: 16px;
    }
    textarea {
      height: 194px;
      padding: 16px 16px;
    }
    div iframe {
      width: 50%;
      height: 345px;
      border-radius: 10px;
      overflow: hidden;
    }

`;
const Depoiments = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            <Button cor='#1a2026' texto='Saiba Mais'/>
          </div>
        </Company>
        <ContactsMaps>
          <h2>Entre em contato</h2>
          <div>
            <form action="">
                <input type="text" placeholder="Seu Nome"/>
                <input type="email" placeholder="Seu E-mail"/>
                <textarea placeholder="Comentário..."></textarea>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23794.594973182444!2d-48.84988049039123!3d-26.25560995099244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaff6766822b412e1!2sUdesc%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1662576883382!5m2!1spt-BR!2sbr" width="600" height="450"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>{/*style="border:0;"*/}
          </div>
          <Button cor='#1a2026' texto='Enviar'/>
        </ContactsMaps>
        <Depoiments>
          <h1>Seção depoimentos</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt ipsa odio itaque debitis id reiciendis et quam adipisci! Quasi, laborum! Neque pariatur quibusdam aliquid molestiae nulla quasi sed suscipit?</p>
        </Depoiments>
    </>
  )
}

export default Home;