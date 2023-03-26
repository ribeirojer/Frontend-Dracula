import { Envelope, MapPin, Phone } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
} from "phosphor-react";
import logo from "../assets/logo.png";
import { Anchor, Heading, List, Paragraph } from "dracula-ui";
type Props = {};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #15161d;
  .footer {
    display: flex;
    align-items: center;
    div {
      width: 25%;
      ul {
        margin-top: 1.5rem;
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
      }
    }
  }
  p {
    background-color: #15161d;
  }
`;

const Footer = (props: Props) => {
  const today = new Date();
  const year = today.getFullYear();
  /*
  <ul className="newsletter-follow">
  <li>
    <a href="https://www.facebook.com/" target="_blank">
      <FacebookLogo></FacebookLogo>
    </a>
  </li>
  <li>
    <a href="https://twitter.com/" target="_blank">
      <TwitterLogo></TwitterLogo>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/" target="_blank">
      <InstagramLogo></InstagramLogo>
    </a>
  </li>
  <li>
    <a href="https://www.pinterest.com/" target="_blank">
      <PinterestLogo></PinterestLogo>
    </a>
  </li>
</ul>*/
  return (
    <Wrapper>
      <div className="footer">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <Heading size="sm">
            Transforme seu lar em um castelo das trevas com os eletrônicos do
            e-commerce Drácula.
          </Heading>
          <List color="white">
            <li className="drac-text drac-text-white">
              <Anchor href="" target={"_blank"}>
                <MapPin></MapPin> Rua Paulo Malschitzki, 240, Joinville - SC
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="" target={"_blank"}>
                <Phone></Phone> +55 (12) 98158-0992
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="" target={"_blank"}>
                <Envelope></Envelope> contato@dracula.com
              </Anchor>
            </li>
          </List>
        </div>
        <div>
          <Heading>Categorias</Heading>
          <List>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Promoção
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Laptops
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Smartphones
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Câmeras
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Acessórios
              </Anchor>
            </li>
          </List>
        </div>
        <div>
          <Heading>Informações</Heading>
          <List>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Sobre a empresa
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Entre em contato
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Política de Privacidade
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Ordens e Retornos
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Termos e Condições
              </Anchor>
            </li>
          </List>
        </div>
        <div>
          <Heading>Serviços</Heading>
          <List>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Minha Conta
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Ver Carrinho
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Lista de Desejos
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Finalizar minha ordem
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor size="lg" target={"_blank"}>
                Ajuda
              </Anchor>
            </li>
          </List>
        </div>
      </div>
      <Paragraph align="center" p="sm">
        &copy; Dracula E-commerce {year} - Todos os direitos reservados
      </Paragraph>
    </Wrapper>
  );
};

export default Footer;
