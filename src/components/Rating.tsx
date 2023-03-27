import { Box, Heading, Paragraph } from "dracula-ui";
import { Star } from "phosphor-react";
import styled from "styled-components";
import { countOccurrences, fillStars } from "../utils";
import theme from "../utils/theme";
import Stars from "./Stars";

interface RatingProps {
  ratings: number[];
}

const RatingContainer = styled.div`
  width: 25%;

  .rating-progress {
    display: flex;
    align-items: center;

    progress {
      width: 150px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;

const Rating = ({ ratings }: RatingProps) => {
  const averageRating =
    ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
  const occurrences = countOccurrences(ratings);

  console.log(occurrences);
  const sum = ratings.reduce((a, b) => a + b, 0);

  return (
    <RatingContainer id="rating">
      <div className="rating-averageRating">
        <Heading color="purple">{averageRating.toFixed(1)}</Heading>
        <Stars size={32} rating={averageRating}></Stars>
      </div>
      <Box className="rating">
        <div className="rating-progress">
          <Stars rating={5}></Stars>
          <progress value={occurrences[5]} max="100"></progress>
          <Paragraph>
            {Math.ceil((occurrences[5] * ratings.length) / 100)}
          </Paragraph>
        </div>

        <div className="rating-progress">
          <Stars rating={4}></Stars>
          <progress value={occurrences[4]} max="100"></progress>
          <Paragraph>
            {Math.ceil((occurrences[4] * ratings.length) / 100)}
          </Paragraph>
        </div>

        <div className="rating-progress">
          <Stars rating={3}></Stars>
          <progress value={occurrences[3]} max="100"></progress>
          <Paragraph>
            {Math.ceil((occurrences[3] * ratings.length) / 100)}
          </Paragraph>
        </div>

        <div className="rating-progress">
          <Stars rating={2}></Stars>
          <progress value={occurrences[2]} max="100"></progress>
          <Paragraph>
            {Math.ceil((occurrences[2] * ratings.length) / 100)}
          </Paragraph>
        </div>

        <div className="rating-progress">
          <Stars rating={1}></Stars>
          <progress value={occurrences[1]} max="100"></progress>
          <Paragraph>
            {Math.ceil((occurrences[1] * ratings.length) / 100)}
          </Paragraph>
        </div>
      </Box>
    </RatingContainer>
  );
};

export default Rating;
