import { Button, Input } from "dracula-ui";
import React, { useState } from "react";

type Props = {};

const ProductTab = (props: Props) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div id="product-tab">
      <ul className="tab-nav">
        <li className={activeTab === "tab1" ? "active" : ""}>
          <a
            data-toggle="tab"
            href="#tab1"
            onClick={() => handleTabClick("tab1")}
          >
            Description
          </a>
        </li>
        <li className={activeTab === "tab2" ? "active" : ""}>
          <a
            data-toggle="tab"
            href="#tab2"
            onClick={() => handleTabClick("tab2")}
          >
            Details
          </a>
        </li>
        <li className={activeTab === "tab3" ? "active" : ""}>
          <a
            data-toggle="tab"
            href="#tab3"
            onClick={() => handleTabClick("tab3")}
          >
            Reviews (3)
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div
          id="tab1"
          className={`tab-pane fade ${activeTab === "tab1" ? "in active" : ""}`}
        >
          <div className="row">
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div
          id="tab2"
          className={`tab-pane fade ${activeTab === "tab2" ? "in active" : ""}`}
        >
          <div className="row">
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div
          id="tab3"
          className={`tab-pane fade ${activeTab === "tab3" ? "in active" : ""}`}
        >
          <div className="row">
            <div className="col-md-3">
              <div id="rating">
                <div className="rating-avg">
                  <span>4.5</span>
                  <div className="rating-stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
                <ul className="rating">
                  <li>
                    <div className="rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="rating-progress">
                      <div style={{ width: "80%" }}></div>
                    </div>
                    <span className="sum">3</span>
                  </li>
                  <li>
                    <div className="rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="rating-progress">
                      <div style={{ width: "60%" }}></div>
                    </div>
                    <span className="sum">2</span>
                  </li>
                  <li>
                    <div className="rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="rating-progress">
                      <div></div>
                    </div>
                    <span className="sum">0</span>
                  </li>
                  <li>
                    <div className="rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="rating-progress">
                      <div></div>
                    </div>
                    <span className="sum">0</span>
                  </li>
                  <li>
                    <div className="rating-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <div className="rating-progress">
                      <div></div>
                    </div>
                    <span className="sum">0</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div id="reviews">
                <ul className="reviews">
                  <li>
                    <div className="review-heading">
                      <h5 className="name">John</h5>
                      <p className="date">27 DEC 2018, 8:0 PM</p>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                      </div>
                    </div>
                    <div className="review-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="review-heading">
                      <h5 className="name">John</h5>
                      <p className="date">27 DEC 2018, 8:0 PM</p>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                      </div>
                    </div>
                    <div className="review-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="review-heading">
                      <h5 className="name">John</h5>
                      <p className="date">27 DEC 2018, 8:0 PM</p>
                      <div className="review-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                      </div>
                    </div>
                    <div className="review-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="reviews-pagination">
                  <li className="active">1</li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div id="review-form">
                <form className="review-form">
                  <Input
                    color="purple"
                    className="input"
                    type="text"
                    placeholder="Your Name"
                  />
                  <Input
                    color="purple"
                    className="input"
                    type="email"
                    placeholder="Your Email"
                  />
                  <textarea
                    className="input"
                    placeholder="Your Review"
                  ></textarea>
                  <div className="input-rating">
                    <span>Your Rating: </span>
                    <div className="stars">
                      <input id="star5" name="rating" value="5" type="radio" />
                      <label htmlFor="star5"></label>
                      <input id="star4" name="rating" value="4" type="radio" />
                      <label htmlFor="star4"></label>
                      <input id="star3" name="rating" value="3" type="radio" />
                      <label htmlFor="star3"></label>
                      <input id="star2" name="rating" value="2" type="radio" />
                      <label htmlFor="star2"></label>
                      <input id="star1" name="rating" value="1" type="radio" />
                      <label htmlFor="star1"></label>
                    </div>
                  </div>
                  <Button className="primary-btn">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
