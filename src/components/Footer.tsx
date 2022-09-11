import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, PinterestLogo, TwitterLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import image from '../assets/woman.png'

type Props = {}

const Wrapper = styled.footer`
  background-color: var(--cor-A);
  color: var(--cor-C);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 8%;
  height: 432px;
`;
const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin-top: 0.7rem;
      display: flex;
      align-items: center;
    }
    p svg {
      margin-right: 5px;
    }
`;
const Company = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin-bottom: 0.8rem;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    div a {
      color: var(--cor-C);
      margin: 0 0.5rem;
      cursor: pointer;
      transition: 0.3s;
    }
    div a:hover {
      color: var(--cor-E);
    }
`;
const Logo = styled.span`
    font-size: 2rem;
    font-family: 'Dancing Script';
    font-weight: 700;
    margin-bottom: 1rem;
    a {
        display: flex;
        align-items: center;
        color: var(--cor-C);
        text-decoration: none;
    }
    img {
        border: 1px solid #fff;
        border-radius: 50%;
        height: 40px;
        margin-right: 0.5rem;
    }
    
`;
const Hours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 28px;
      font-family: 'Dancing Script';
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      margin-top: 0.7rem;
    }
    p span {
      margin: 0 0.5rem;
    }
`;
const Last = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    p {
      margin-bottom: 2rem;
    }
    p span {
      color: #f00;
    }
    a {
      color: var(--cor-C);
      text-decoration: none;
    }
`;

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <FooterWrapper>
        <Contacts>
          <h3>Entre em Contato</h3>
          <p><MapPin size={20} weight="fill"/> Rua Paulo Malschitzki, 200, Joinville - SC</p>
          <p><Phone size={20} weight="fill"/> (12) 98158-0992</p>
          <p><EnvelopeSimple size={20} weight="fill"/> eduardojerbr@gmail.com</p>
        </Contacts>
        <Company>          
          <Logo>
              <Link to={"/"}><img src={image} alt="" />Maria</Link>
          </Logo>
          <p>Artigos personalizados em MDF e acrílico, corte e </p>
          <p>impresão a laser, presentes e muito mais!</p>
          <div>
            <a href='https://www.facebook.com' target={'_blank'}><FacebookLogo size={32} /></a>
            <a href='https://www.twitter.com' target={'_blank'}><TwitterLogo size={32} /></a>
            <a href='https://www.linkedin.com' target={'_blank'}><LinkedinLogo size={32} /></a>
            <a href='https://www.instagram.com' target={'_blank'}><InstagramLogo size={32} /></a>
            <a href='https://www.pinterest.com' target={'_blank'}><PinterestLogo size={32} /></a>
          </div>
        </Company>
        <Hours>
          <h3>Atendimento</h3>
          <p>Segunda à Sábado</p>
          <p><span>08:00 </span> às <span> 17:00</span></p>
        </Hours>
      </FooterWrapper>
      <Last>
        <p>&copy; Princesa Maria - Todos os direitos reservados.</p>
        <p>Desenvolvido com <span> &#x2764; </span> por <a target={"_blank"} href="http://www.eduardojer.tech">José Eduardo Ribeiro</a></p>
      </Last>
    </Wrapper>
  )
}

export default Footer;