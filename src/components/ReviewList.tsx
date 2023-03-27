import { Button } from "dracula-ui";
import styled from "styled-components";
import { IReview } from "../interfaces/Review";
import Review from "./Review";

type Props = {};

const ReviewListContainer = styled.div`
  width: 50%;
`;

const ReviewList = (props: Props) => {
  const notebookReviews: IReview[] = [
    {
      name: "Alice",
      date: new Date("2022-03-10"),
      rating: 4,
      comment:
        "O notebook é rápido e muito leve, mas a bateria poderia durar mais tempo.",
    },
    {
      name: "Bob",
      date: new Date("2022-02-15"),
      rating: 5,
      comment:
        "Melhor notebook que já comprei! Tela incrível, teclado confortável e ótimo desempenho.",
    },
    {
      name: "Carol",
      date: new Date("2022-01-20"),
      rating: 3,
      comment:
        "O notebook é bom, mas não é tão poderoso quanto eu esperava. Ainda assim, recomendo para uso básico.",
    },
  ];

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
