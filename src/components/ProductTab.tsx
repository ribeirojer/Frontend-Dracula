import axios from "axios";
import { Button, Divider, Input, Paragraph, Tabs } from "dracula-ui";
import { useState } from "react";
import styled from "styled-components";
import ProductForm from "./ProductForm";
import Rating from "./Rating";
import ReviewList from "./ReviewList";
import { IElectronicProduct } from "../interfaces/Product";

type Props = {
  itemToShow: IElectronicProduct;
};

const Container = styled.div`
  width: 100%;
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
const ProductTab = ({ itemToShow }: Props) => {
  const [isDescriptionSelected, setIsDescriptionSelected] = useState(true);
  const [isDetailsSelected, setIsDetailsSelected] = useState(false);
  const [isReviewsSelected, setIsReviewsSelected] = useState(false);
  const ratings = itemToShow.comments?.map((comment) => comment.rating);

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
          Comentários ({itemToShow.comments?.length})
        </li>
      </Tabs>

      <div className="tab-content">
        {isDescriptionSelected && (
          <Paragraph>{itemToShow.description}</Paragraph>
        )}
        {isDetailsSelected && (
          <Paragraph>{JSON.stringify(itemToShow.features)}</Paragraph>
        )}
        {isReviewsSelected && (
          <div className="row">
            <Rating ratings={ratings || []}></Rating>
            <ReviewList
              notebookReviews={itemToShow.comments || []}
            ></ReviewList>
            <ProductForm></ProductForm>
          </div>
        )}
      </div>
      <Divider color="purple" my="sm"></Divider>
    </Container>
  );
};

export default ProductTab;
