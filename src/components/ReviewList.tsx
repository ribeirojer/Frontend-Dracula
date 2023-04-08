import { Heading, Paragraph } from "dracula-ui";
import styled from "styled-components";
import { IReview } from "../interfaces/Review";
import Stars from "./Stars";
import Pagination from "./Pagination";
import { useState } from "react";
import theme from "../utils/theme";

type Props = {
  notebookReviews: IReview[];
};

const ReviewListContainer = styled.div`
  width: 50%;
  padding: 0 2rem;
  .review-heading {
    list-style-type: none;
    > p {
      margin: 0.5rem 0 1rem;
    }
    > div {
      display: flex;
      gap: 1rem;
      svg {
        color: ${theme.dracula.purple};
      }
    }
  }
`;

const ReviewList = ({ notebookReviews }: Props) => {
  const [currentPage, setCurrentPage] = useState(1); // página atual
  const lastIndex = currentPage * 3;
  const firstIndex = lastIndex - 3;
  const totalPages = Math.ceil(notebookReviews.length / 3);
  const currentReviews = notebookReviews.slice(firstIndex, lastIndex);

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ReviewListContainer id="reviews">
      <ul className="reviews">
        {currentReviews.map((review, i) => {
          const formattedDate = new Intl.DateTimeFormat("pt-BR").format(
            review.date
          );
          return (
            <li key={review.name} className="review-heading">
              <div>
                <Heading color="purpleCyan">{review.name}</Heading>
                <Stars rating={review.rating}></Stars>
                <Heading size="sm" color="cyanGreen">
                  {formattedDate}
                </Heading>
              </div>
              <Paragraph>{review.comment}</Paragraph>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleChangePage}
      ></Pagination>
    </ReviewListContainer>
  );
};

export default ReviewList;
