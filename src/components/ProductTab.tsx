import { Button, Divider, Paragraph, Tabs } from "dracula-ui";
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
    padding-bottom: 1rem;
    gap: 0 2rem;
  }
  .tab-content {
    > p {
      text-align: center;
      margin: 0 auto;
      width: 80%;
    }
  }
  form {
    width: 25%;
  }
  @media (max-width: 768px) {
    form {
      width: 100%;
    }
    .tab-select {
      padding: 0 1rem 1rem;
      gap: 0 1rem;
      margin-bottom: unset;
      button {
        font-size: 0.8rem;
        padding: 0 0.8rem;
      }
    }
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
        <Button
          color="purple"
          variant={`${isDescriptionSelected ? "normal" : "ghost"}`}
          onClick={() => {
            setIsDescriptionSelected(true);
            setIsDetailsSelected(false);
            setIsReviewsSelected(false);
          }}
        >
          Descrição
        </Button>
        <Button
          color="purple"
          variant={`${isDetailsSelected ? "normal" : "ghost"}`}
          onClick={() => {
            setIsDescriptionSelected(false);
            setIsDetailsSelected(true);
            setIsReviewsSelected(false);
          }}
        >
          Detalhes
        </Button>
        <Button
          id="comments"
          color="purple"
          variant={`${isReviewsSelected ? "normal" : "ghost"}`}
          onClick={() => {
            setIsDescriptionSelected(false);
            setIsDetailsSelected(false);
            setIsReviewsSelected(true);
          }}
        >
          Comentários ({itemToShow.comments?.length})
        </Button>
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
            {itemToShow.comments && (
              <>
                <Rating ratings={ratings || []}></Rating>
                <ReviewList
                  notebookReviews={itemToShow.comments || []}
                ></ReviewList>
              </>
            )}
            <ProductForm></ProductForm>
          </div>
        )}
      </div>
      <Divider color="purple" my="sm"></Divider>
    </Container>
  );
};

export default ProductTab;
