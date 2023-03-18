import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.footer`
  color: #fff;
  display: flex;
  flex-direction: column;
  .row {
    background-color: #15161d;
    div {
      width: 25%;
      ul {
        display: flex;
        flex-direction: column;
      }
    }
    display: flex;
  }
`;

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="row">
        <div>
          <h3 className="footer-title">Sobre a Empresa</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <ul className="footer-links">
            <li>
              <Link to={"/"}>
                <MapPin></MapPin> Rua Paulo Malschitzki, 240, Joinville - SC
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-phone"></i>+55 (12) 98158-0992
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-envelope-o"></i>contato@electro.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Categorias</h3>
          <ul className="footer-links">
            <li>
              <Link to={"/"}>Promoção</Link>
            </li>
            <li>
              <Link to={"/"}>Laptops</Link>
            </li>
            <li>
              <Link to={"/"}>Smartphones</Link>
            </li>
            <li>
              <Link to={"/"}>Câmeras</Link>
            </li>
            <li>
              <Link to={"/"}>Acessórios</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Informações</h3>
          <ul className="footer-links">
            <li>
              <Link to={"/"}>Sobre a empresa</Link>
            </li>
            <li>
              <Link to={"/"}>Entre em contato</Link>
            </li>
            <li>
              <Link to={"/"}>Política de Privacidade</Link>
            </li>
            <li>
              <Link to={"/"}>Ordens e Retornos</Link>
            </li>
            <li>
              <Link to={"/"}>Termos e Condições</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Serviços</h3>
          <ul className="footer-links">
            <li>
              <Link to={"/"}>Minha Conta</Link>
            </li>
            <li>
              <Link to={"/"}>Ver Carrinho</Link>
            </li>
            <li>
              <Link to={"/"}>Lista de Desejos</Link>
            </li>
            <li>
              <Link to={"/"}>Finalizar minha ordem</Link>
            </li>
            <li>
              <Link to={"/"}>Ajuda</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="col-md-12 text-center">
          <ul className="footer-payments">
            <li>
              <Link to={"/"}>
                <i className="fa fa-cc-visa"></i>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-credit-card"></i>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-cc-paypal"></i>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-cc-mastercard"></i>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-cc-discover"></i>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <i className="fa fa-cc-amex"></i>
              </Link>
            </li>
          </ul>
          <span className="copyright">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> Todos os
            direitos reservados
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
