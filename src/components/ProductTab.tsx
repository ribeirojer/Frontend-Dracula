import { Button, Divider, Input, Paragraph, Tabs } from "dracula-ui";
import { useState } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";

type Props = {};

const Container = styled.div`
  .tab-select {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 0 2rem;
  }
`;
const ProductTab = (props: Props) => {
  const [isDescriptionSelected, setIsDescriptionSelected] = useState(true);
  const [isDetailsSelected, setIsDetailsSelected] = useState(false);
  const [isReviewsSelected, setIsReviewsSelected] = useState(false);

  return (
    <Container id="product-tab">
      <Divider color="purple" my="sm" />
      <Tabs className="tab-select" color="purple">
        <li
          className={`drac-tab drac-text ${
            isDescriptionSelected && "drac-tab-active drac-text-purple"
          }`}
          onClick={() => {
            setIsDescriptionSelected(true);
            setIsDetailsSelected(false);
            setIsReviewsSelected(false);
          }}
        >
          Descrição
        </li>
        <li
          className={`drac-tab drac-text ${
            isDetailsSelected && "drac-tab-active drac-text-purple"
          }`}
          onClick={() => {
            setIsDescriptionSelected(false);
            setIsDetailsSelected(true);
            setIsReviewsSelected(false);
          }}
        >
          Detalhes
        </li>
        <li
          className={`drac-tab drac-text ${
            isReviewsSelected && "drac-tab-active drac-text-purple"
          }`}
          onClick={() => {
            setIsDescriptionSelected(false);
            setIsDetailsSelected(false);
            setIsReviewsSelected(true);
          }}
        >
          Comentários (10)
        </li>
      </Tabs>

      <div className="tab-content">
        {isDescriptionSelected && (
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        )}

        {isDetailsSelected && (
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        )}

        {isReviewsSelected && (
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
            <ReviewList></ReviewList>
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
              <textarea className="input" placeholder="Your Review"></textarea>
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
        )}
      </div>
      <Divider color="purple" my="sm"></Divider>
    </Container>
  );
};

export default ProductTab;
