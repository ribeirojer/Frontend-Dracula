import { Envelope, MapPin, Phone } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
} from "phosphor-react";
import { Anchor, Heading, List, Paragraph } from "dracula-ui";
import Logo from "./Logo";
import { dataList } from "../utils/cardsData";
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
        li {
          a {
            font-size: 1rem;
          }
        }
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
          <Logo></Logo>
          <Heading size="sm">
            Transforme seu lar em um castelo das trevas com os eletrônicos do
            e-commerce Drácula.
          </Heading>
          <List color="white">
            <li className="drac-text drac-text-white">
              <Anchor
                href="https://goo.gl/maps/hMDFQ3zoR9mZDF5b8"
                target={"_blank"}
              >
                <MapPin></MapPin> Rua Paulo Malschitzki, 240, Joinville - SC
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor
                href="https://api.whatsapp.com/send?phone=5512981580992&amp;text=Olá,%20Drácula!"
                target={"_blank"}
              >
                <Phone></Phone> +55 (12) 98158-0992
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="mailto:contato@dracula.com" target={"_blank"}>
                <Envelope></Envelope> contato@dracula.com
              </Anchor>
            </li>
          </List>
        </div>
        <div>
          <Heading>Categorias</Heading>
          <List>
            <li>
              <Link
                className="drac-text drac-text-white drac-text-purple--hover"
                to={"shop?c=hotdeals"}
              >
                Promoção
              </Link>
            </li>
            {dataList.map((item) => {
              return (
                <li key={item.link} className="active">
                  <Link
                    className="drac-text drac-text-white drac-text-purple--hover"
                    to={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </List>
        </div>
        <div>
          <Heading>Informações</Heading>
          <List>
            <li className="drac-text drac-text-white">
              <Anchor href="#" size="lg" target={"_blank"}>
                Sobre a empresa
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="#" size="lg" target={"_blank"}>
                Entre em contato
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="#" size="lg" target={"_blank"}>
                Política de Privacidade
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="#" size="lg" target={"_blank"}>
                Ordens e Retornos
              </Anchor>
            </li>
            <li className="drac-text drac-text-white">
              <Anchor href="#" size="lg" target={"_blank"}>
                Termos e Condições
              </Anchor>
            </li>
          </List>
        </div>
        <div>
          <Heading>Serviços</Heading>
          <List>
            <li>
              <Link
                className="drac-text drac-text-white drac-text-purple--hover"
                to={"/user"}
              >
                Minha Conta
              </Link>
            </li>
            <li>
              <Link
                className="drac-text drac-text-white drac-text-purple--hover"
                to={"/cart"}
              >
                Ver Carrinho
              </Link>
            </li>
            <li>
              <Link
                className="drac-text drac-text-white drac-text-purple--hover"
                to={"/wishlist"}
              >
                Lista de Desejos
              </Link>
            </li>
            <li>
              <Link
                className="drac-text drac-text-white drac-text-purple--hover"
                to={"/checkout"}
              >
                Finalizar minha ordem
              </Link>
            </li>
            <li>
              <Link
                className="drac-text drac-text-white drac-text-purple--hover"
                to={"/"}
              >
                Ajuda
              </Link>
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
