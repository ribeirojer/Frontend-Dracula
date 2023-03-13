import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  PinterestLogo,
  TwitterLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../assets/woman.png";

type Props = {};

const Wrapper = styled.footer`
  background-color: var(--cor-A);
  color: var(--cor-C);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 8%;
  height: 432px;
`;

const Footer = (props: Props) => {
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Sobre a Empresa</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>Rua Paulo Malschitzki, 240, Joinville - SC
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>+55 (12) 98158-0992
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>contato@electro.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categorias</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Promoção</a>
                  </li>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                  <li>
                    <a href="#">Smartphones</a>
                  </li>
                  <li>
                    <a href="#">Câmeras</a>
                  </li>
                  <li>
                    <a href="#">Acessórios</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clearfix visible-xs"></div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Informações</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Sobre a empresa</a>
                  </li>
                  <li>
                    <a href="#">Entre em contato</a>
                  </li>
                  <li>
                    <a href="#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Ordens e Retornos</a>
                  </li>
                  <li>
                    <a href="#">Termos e Condições</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Serviços</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Minha Conta</a>
                  </li>
                  <li>
                    <a href="#">Ver Carrinho</a>
                  </li>
                  <li>
                    <a href="#">Lista de Desejos</a>
                  </li>
                  <li>
                    <a href="#">Finalizar minha ordem</a>
                  </li>
                  <li>
                    <a href="#">Ajuda</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom-footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="footer-payments">
                <li>
                  <a href="#">
                    <i className="fa fa-cc-visa"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-credit-card"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cc-paypal"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cc-mastercard"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cc-discover"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cc-amex"></i>
                  </a>
                </li>
              </ul>
              <span className="copyright">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> Todos
                os direitos reservados
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
