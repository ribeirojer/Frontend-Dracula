import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, PinterestLogo, TwitterLogo } from 'phosphor-react';
import styled from 'styled-components'

type Props = {}

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 5%;
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
`;
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 2rem;
      font-family: 'Dancing Script';
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      margin-top: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;

    }
    p span {
      color: #EEBB61;
      margin-right: 5px;
    }
`;
const Company = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 3rem;
      font-family: 'Dancing Script';
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #EEBB61;
      text-shadow: 1px 1px #000;
    }
    p {
      margin-bottom: 0.8rem;
    }
    div {
      width: 100%;
      color: #EEBB61;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    div span {
      margin: 0 0.5rem;
      cursor: pointer;
    }
    div span:hover {
      color: #fff;
    }
`;
const Hours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 2rem;
      font-family: 'Dancing Script';
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      margin-top: 0.7rem;
    }
    p span {
      color: #EEBB61;
      margin: 0 0.5rem;
    }
`;

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <FooterWrapper>
        <Contacts>
          <h3>Entre em Contato</h3>
          <p><span><MapPin size={20} weight="fill"/></span> Rua Paulo Malschitzki, 200, Joinville - SC</p>
          <p><span><Phone size={20} weight="fill"/></span> (12) 98158-0992</p>
          <p><span><EnvelopeSimple size={20} weight="fill"/></span> eduardojerbr@gmail.com</p>
        </Contacts>
        <Company>
          <h2>Maria</h2>
          <p>Artigos personalizados em MDF e acrílico, corte e </p>
          <p>impresão a laser, presentes e muito mais!</p>
          <div>
            <span><FacebookLogo size={32} /></span>
            <span><TwitterLogo size={32} /></span>
            <span><LinkedinLogo size={32} /></span>
            <span><InstagramLogo size={32} /></span>
            <span><PinterestLogo size={32} /></span>
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