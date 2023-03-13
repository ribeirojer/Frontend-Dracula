import { MagnifyingGlass, ShoppingCart, UserCirclePlus } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../assets/woman.png";

type Props = {};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 88px;
  padding: 0 8%;
  z-index: 2;
`;
const Logo = styled.span`
  font-size: 2rem;
  font-family: "Dancing Script";
  font-weight: 700;
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
const List = styled.ul`
  li a {
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 25px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s;
  }
  li:hover a {
    color: var(--cor-A);
    background-color: #fff;
  }
  li:last-child a {
    border: 1px solid #fff;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
  width: 253px;
  span a {
    color: #fff;
    margin: 0 0 0 0.5rem;
  }
`;
const ButtonSearch = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  input {
    display: none;
    z-index: 2;
  }
  &:hover input {
    display: block;
    padding: 8px 16px;
    color: var(--cor-B);
    border-radius: 45px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border: 2px solid var(--cor-B);
    font-weight: 700;
    cursor: text;
  }
  svg {
    color: #fff;
    position: absolute;
    right: 0.5rem;
    cursor: pointer;
  }
  &:hover svg {
    color: var(--cor-B);
    z-index: 3;
  }
`;

const Header = (props: Props) => {
  const navigate = useNavigate();
  function handleSubmit(q: string): void {
    navigate("/produtos");
  }
  return (
    <header>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="#">
                <i className="fa fa-phone"></i> +021-95-51-84
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope-o"></i> email@email.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
              </a>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="#">
                <i className="fa fa-dollar"></i> USD
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user-o"></i> My Account
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src="./img/logo.png" alt="" />
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">Category 01</option>
                    <option value="1">Category 02</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>

            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                <div>
                  <a href="#">
                    <i className="fa fa-heart-o"></i>
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>

                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i className="fa fa-shopping-cart"></i>
                    <span>Your Cart</span>
                    <div className="qty">3</div>
                  </a>
                  <div className="cart-dropdown">
                    <div className="cart-list">
                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/product01.png" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name">
                            <a href="#">product name goes here</a>
                          </h3>
                          <h4 className="product-price">
                            <span className="qty">1x</span>$980.00
                          </h4>
                        </div>
                        <button className="delete">
                          <i className="fa fa-close"></i>
                        </button>
                      </div>

                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/product02.png" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name">
                            <a href="#">product name goes here</a>
                          </h3>
                          <h4 className="product-price">
                            <span className="qty">3x</span>$980.00
                          </h4>
                        </div>
                        <button className="delete">
                          <i className="fa fa-close"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-summary">
                      <small>3 Item(s) selected</small>
                      <h5>SUBTOTAL: $2940.00</h5>
                    </div>
                    <div className="cart-btns">
                      <a href="#">View Cart</a>
                      <a href="#">
                        Checkout <i className="fa fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="menu-toggle">
                  <a href="#">
                    <i className="fa fa-bars"></i>
                    <span>Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
