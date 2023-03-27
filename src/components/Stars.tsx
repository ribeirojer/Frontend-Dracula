import { Star } from "phosphor-react";
import { fillStars } from "../utils";

type Props = {
  rating: number;
  size?: number;
};

const Stars = ({ rating, size=16 }: Props) => {
  return (
    <div className="review-rating">
      <Star size={size} weight={fillStars(rating, 0)}></Star>
      <Star size={size} weight={fillStars(rating, 1)}></Star>
      <Star size={size} weight={fillStars(rating, 2)}></Star>
      <Star size={size} weight={fillStars(rating, 3)}></Star>
      <Star size={size} weight={fillStars(rating, 4)}></Star>
    </div>
  );
};

export default Stars;
