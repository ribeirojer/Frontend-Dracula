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
  font-family: "Dancing Script";
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
    font-family: "Dancing Script";
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
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i>1734 Stonecoal Road
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i>+021-95-51-84
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>email@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Hot deals</a>
                  </li>
                  <li>
                    <a href="#">Laptops</a>
                  </li>
                  <li>
                    <a href="#">Smartphones</a>
                  </li>
                  <li>
                    <a href="#">Cameras</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clearfix visible-xs"></div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Orders and Returns</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">View Cart</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
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
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
