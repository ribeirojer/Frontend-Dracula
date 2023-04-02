import { Button } from "dracula-ui";
import styled from "styled-components";
import { IReview } from "../interfaces/Review";
import Review from "./Review";

type Props = {
  notebookReviews: IReview[]
};

const ReviewListContainer = styled.div`
  width: 50%;
`;

const ReviewList = ({notebookReviews}: Props) => {

  return (
    <ReviewListContainer id="reviews">
      <ul className="reviews">
        {notebookReviews.map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </ul>
      <ul className="reviews-pagination">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>&gt;</Button>
      </ul>
    </ReviewListContainer>
  );
};

export default ReviewList;
