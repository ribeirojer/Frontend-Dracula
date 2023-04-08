import axios from "axios";
import { Button, Heading, Input, Paragraph } from "dracula-ui";
import { Star } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import theme from "../utils/theme";

type Props = {};

const ProductFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  textarea {
    display: block;
    font-size: var(--font-md);
    min-height: var(--spacing-40);
    padding: var(--spacing-4);
    background: var(--blackSecondary);
    border: 0.3rem solid transparent;
    border-radius: var(--rounded-lg);
    box-sizing: border-box;
    outline: none;
    transition: all 0.3s ease-in-out;
    width: 100%;
    font-family: Fira Code, monospace;
    color: var(--purple);
  }
  .input-rating {
    display: flex;
    gap: 0.5rem;
  }
  .stars input[type="radio"] {
    display: none;
  }

  .stars label {
    display: inline-block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: ${theme.dracula.purple};
  }
`;

const ProductForm = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    review: "",
    rating: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setErrors({
      name: "",
      email: "",
      review: "",
      rating: "",
    });

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Nome é obrigatório",
      }));
    }
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "E-mail é obrigatório",
      }));
    }
    if (!review) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "Avaliação é obrigatória",
      }));
    }
    if (!rating) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        rating: "A nota é obrigatória",
      }));
    }

    if (name && email && review && rating) {
      const reviewData = {
        name,
        email,
        review,
        rating,
      };
      console.log(reviewData);
      axios
        .post("http://localhost:3000/reviews", reviewData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    event.target.reset();
  };

  return (
    <ProductFormContainer onSubmit={handleSubmit}>
      <Heading>Sua avaliação: </Heading>
      <Input
        id="name-input"
        color="purple"
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {errors.name && <Paragraph color="red">{errors.name}</Paragraph>}

      <Input
        id="email-input"
        color="purple"
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errors.email && <Paragraph color="red">{errors.email}</Paragraph>}

      <textarea
        placeholder="Sua avaliação..."
        value={review}
        onChange={(event) => setReview(event.target.value)}
      ></textarea>
      {errors.review && <Paragraph color="red">{errors.review}</Paragraph>}

      <div className="input-rating">
        <span className="drac-text">Sua nota: </span>
        <div className="stars">
          <input
            id="star1"
            name="rating"
            value="1"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 1}
          />
          <label htmlFor="star1">
            <Star size={20} weight={`${rating >= 1 ? "fill" : "bold"}`}></Star>
          </label>
          <input
            id="star2"
            name="rating"
            value="2"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 2}
          />
          <label htmlFor="star2">
            <Star size={20} weight={`${rating >= 2 ? "fill" : "bold"}`}></Star>
          </label>
          <input
            id="star3"
            name="rating"
            value="3"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 3}
          />
          <label htmlFor="star3">
            <Star size={20} weight={`${rating >= 3 ? "fill" : "bold"}`}></Star>
          </label>
          <input
            id="star4"
            name="rating"
            value="4"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 4}
          />
          <label htmlFor="star4">
            <Star size={20} weight={`${rating >= 4 ? "fill" : "bold"}`}></Star>
          </label>
          <input
            id="star5"
            name="rating"
            value="5"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 5}
          />
          <label htmlFor="star5">
            <Star size={20} weight={`${rating >= 5 ? "fill" : "bold"}`}></Star>
          </label>
        </div>
      </div>
      {errors.rating && <Paragraph color="red">{errors.rating}</Paragraph>}

      <Button color="purple" type="submit">
        ENVIAR
      </Button>
    </ProductFormContainer>
  );
};

export default ProductForm;
