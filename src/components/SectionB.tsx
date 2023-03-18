import styled from "styled-components";

type Props = {};

const cardWidthMobile = "100%";
const cardWidthTablet = "50%";
const cardWidthDesktop = "25%";
const cardMargin = "0 1rem";

const WrapperSectionB = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .section-title {
    display: flex;
    justify-content: space-between;
  }
  .products {
    display: flex;
  }
`;

const Section = styled.section`
  width: ${cardWidthMobile};
  padding: ${cardMargin};

  @media (min-width: 640px) {
    width: ${cardWidthTablet};
  }

  @media (min-width: 1024px) {
    width: ${cardWidthDesktop};
  }
`;

const SectionB = (props: Props) => {
  return (
    <WrapperSectionB>
      <div className="section-title">
        <h3 className="title">New Products</h3>
        <div className="section-nav">
          <ul className="section-tab-nav tab-nav">
            <li className="active">
              <a data-toggle="tab" href="#tab1">
                Laptops
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">
                Smartphones
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">
                Cameras
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab1">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="products">
        <Section>
          <div className="product-img">
            <img src="./img/product01.png" alt="" />
            <div className="product-label">
              <span className="sale">-30%</span>
              <span className="new">NEW</span>
            </div>
          </div>
          <div className="product-body">
            <p className="product-category">Category</p>
            <h3 className="product-name">
              <a href="#">product name goes here</a>
            </h3>
            <h4 className="product-price">
              $980.00 <del className="product-old-price">$990.00</del>
            </h4>
            <div className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o"></i>
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare">
                <i className="fa fa-exchange"></i>
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view">
                <i className="fa fa-eye"></i>
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn">
              <i className="fa fa-shopping-cart"></i> add to cart
            </button>
          </div>
        </Section>

        <Section>
          <div className="product-img">
            <img src="./img/product02.png" alt="" />
            <div className="product-label">
              <span className="new">NEW</span>
            </div>
          </div>
          <div className="product-body">
            <p className="product-category">Category</p>
            <h3 className="product-name">
              <a href="#">product name goes here</a>
            </h3>
            <h4 className="product-price">
              $980.00 <del className="product-old-price">$990.00</del>
            </h4>
            <div className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o"></i>
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare">
                <i className="fa fa-exchange"></i>
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view">
                <i className="fa fa-eye"></i>
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn">
              <i className="fa fa-shopping-cart"></i> add to cart
            </button>
          </div>
        </Section>

        <Section>
          <div className="product-img">
            <img src="./img/product03.png" alt="" />
            <div className="product-label">
              <span className="sale">-30%</span>
            </div>
          </div>
          <div className="product-body">
            <p className="product-category">Category</p>
            <h3 className="product-name">
              <a href="#">product name goes here</a>
            </h3>
            <h4 className="product-price">
              $980.00 <del className="product-old-price">$990.00</del>
            </h4>
            <div className="product-rating"></div>
            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o"></i>
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare">
                <i className="fa fa-exchange"></i>
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view">
                <i className="fa fa-eye"></i>
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn">
              <i className="fa fa-shopping-cart"></i> add to cart
            </button>
          </div>
        </Section>

        <Section>
          <div className="product-img">
            <img src="./img/product04.png" alt="" />
          </div>
          <div className="product-body">
            <p className="product-category">Category</p>
            <h3 className="product-name">
              <a href="#">product name goes here</a>
            </h3>
            <h4 className="product-price">
              $980.00 <del className="product-old-price">$990.00</del>
            </h4>
            <div className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o"></i>
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare">
                <i className="fa fa-exchange"></i>
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view">
                <i className="fa fa-eye"></i>
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn">
              <i className="fa fa-shopping-cart"></i> add to cart
            </button>
          </div>
        </Section>

        <Section>
          <div className="product-img">
            <img src="./img/product05.png" alt="" />
          </div>
          <div className="product-body">
            <p className="product-category">Category</p>
            <h3 className="product-name">
              <a href="#">product name goes here</a>
            </h3>
            <h4 className="product-price">
              $980.00 <del className="product-old-price">$990.00</del>
            </h4>
            <div className="product-rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="product-btns">
              <button className="add-to-wishlist">
                <i className="fa fa-heart-o"></i>
                <span className="tooltipp">add to wishlist</span>
              </button>
              <button className="add-to-compare">
                <i className="fa fa-exchange"></i>
                <span className="tooltipp">add to compare</span>
              </button>
              <button className="quick-view">
                <i className="fa fa-eye"></i>
                <span className="tooltipp">quick view</span>
              </button>
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn">
              <i className="fa fa-shopping-cart"></i> add to cart
            </button>
          </div>
        </Section>
      </div>
    </WrapperSectionB>
  );
};

export default SectionB;
