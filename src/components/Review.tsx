import { Heading, Paragraph } from "dracula-ui";
import { Star } from "phosphor-react";
import { IReview } from "../interfaces/Review";
import Stars from "./Stars";

type Props = {
  review: IReview;
};

const Review = ({ review }: Props) => {

  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(review.date);

  return (
    <div className="review-heading">
      <Heading>{review.name}</Heading>
      <Paragraph>{formattedDate}</Paragraph>
      <Stars rating={review.rating}></Stars>
      <Paragraph>{review.comment}</Paragraph>
    </div>
  );
};

export default Review;
