import axios from "axios";
import { Button, Divider, Input, Paragraph, Tabs } from "dracula-ui";
import { useState } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import Rating from "./Rating";
import ReviewList from "./ReviewList";

type Props = {};

const Container = styled.div`
  .tab-select {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 0 2rem;
  }
  form {
    width: 25%;
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
            <Rating ratings={[5, 5,3, 4]}></Rating>
            <ReviewList></ReviewList>
            <ProductForm></ProductForm>
          </div>
        )}
      </div>
      <Divider color="purple" my="sm"></Divider>
    </Container>
  );
};

export default ProductTab;
