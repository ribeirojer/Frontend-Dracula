import { Heading, Paragraph } from "dracula-ui";
import { Star } from "phosphor-react";
import { IReview } from "../interfaces/Review";

type Props = {
  review: IReview;
};

const Review = ({ review }: Props) => {
  const fillStars = (rating: number, index: number) => {
    if (index < rating) {
      return "fill";
    }
    return "regular";
  };

  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(review.date);

  return (
    <div className="review-heading">
      <Heading>{review.name}</Heading>
      <Paragraph>{formattedDate}</Paragraph>
      <div className="review-rating">
        <Star weight={fillStars(review.rating, 0)}></Star>
        <Star weight={fillStars(review.rating, 1)}></Star>
        <Star weight={fillStars(review.rating, 2)}></Star>
        <Star weight={fillStars(review.rating, 3)}></Star>
        <Star weight={fillStars(review.rating, 4)}></Star>
      </div>
      <Paragraph>{review.comment}</Paragraph>
    </div>
  );
};

export default Review;
