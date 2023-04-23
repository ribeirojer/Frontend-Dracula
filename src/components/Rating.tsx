import { Box, Heading, Paragraph } from "dracula-ui";
import styled from "styled-components";
import { countOccurrences } from "../utils";
import Stars from "./Stars";
import theme from "../utils/theme";
import { Star } from "phosphor-react";

interface RatingProps {
  ratings: number[];
}

const RatingContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .rating-averageRating {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      color: ${theme.dracula.purple};
    }
    margin-bottom: 10px;
  }

  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .rating-progress {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    svg {
      color: ${theme.dracula.green};
      margin: 0 0.5rem 0 0;
    }
    progress {
      width: 150px;
      height: 20px;
      margin-right: 10px;
      background-color: ${theme.dracula.black};
      border: none;
      border-radius: 5px;
      appearance: none;
      overflow: hidden;

      &::-webkit-progress-bar {
        background-color: ${theme.dracula.black};
        border-radius: 5px;
      }

      &::-webkit-progress-value {
        background-color: ${theme.dracula.purple};
        border-radius: 5px;
      }
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: ${theme.dracula.green};
    }
  }
  @media (max-width: 768px)  {
    width: 100%;
  }
`;

const Rating = ({ ratings }: RatingProps) => {
  const averageRating =
    ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
  const occurrences = countOccurrences(ratings);

  return (
    <RatingContainer id="rating">
      <div className="rating-averageRating">
        <Heading color="cyanGreen">{averageRating.toFixed(1)}</Heading>
        <Stars size={32} rating={averageRating}></Stars>
      </div>
      <Box className="rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div className="rating-progress" key={rating}>
            <Paragraph>{rating}</Paragraph>
            <Star weight="fill"></Star>
            <progress value={occurrences[rating]} max="100"></progress>
            <Paragraph>
              {Math.ceil((occurrences[rating] * ratings.length) / 100)}
            </Paragraph>
          </div>
        ))}
      </Box>
    </RatingContainer>
  );
};

export default Rating;
