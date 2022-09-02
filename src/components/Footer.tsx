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
const WrapperCenter = styled.div`
    width: 33%;
`;
const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Last = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    p {
      margin-bottom: 2rem;
    }
`;
const Img = styled.img`
    height: 100vh;
`;

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <FooterWrapper>
        <div>
          <h4>Entre em Contato</h4>
          <p>
            <MapPin size={32} />
            Rua Paulo Malschitzki, 200, Joinville - SC
          </p>
          <p>
            <Phone size={32} />
            Celular (12) 98158-0992
          </p>
          <p>
            <EnvelopeSimple size={32} />
            eduardojerbr@gmail.com
          </p>
        </div>
        <WrapperCenter>
          <h2>Maria</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis corrupti numquam l</p>
        <div><FacebookLogo size={32} /> <TwitterLogo size={32} /><LinkedinLogo size={32} /><InstagramLogo size={32} /><PinterestLogo size={32} /></div>
        </WrapperCenter>
        <div>
          <h4>Horário de Atendimento</h4>
          <p>Todos os dias</p>
          <p>08:00 às 17:00</p>
        </div>
      </FooterWrapper>
      <Last>
        <p>&copy; 2022 Todos os Direitos Reservados</p>
        <p>Desenvolvido com s2 por José Eduardo Ribeiro</p>
      </Last>
    </Wrapper>
  )
}

export default Footer;