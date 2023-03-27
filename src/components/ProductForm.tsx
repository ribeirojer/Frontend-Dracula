import axios from "axios";
import { Button, Input } from "dracula-ui";
import React, { useState } from "react";

type Props = {};

const ProductForm = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();

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

    event.target.reset();
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <Input
        color="purple"
        className="input"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        color="purple"
        className="input"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        className="input"
        placeholder="Your Review"
        value={review}
        onChange={(event) => setReview(event.target.value)}
      ></textarea>
      <div className="input-rating">
        <span>Sua avaliação: </span>
        <div className="stars">
          <input
            id="star5"
            name="rating"
            value="5"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 5}
          />
          <label htmlFor="star5"></label>
          <input
            id="star4"
            name="rating"
            value="4"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 4}
          />
          <label htmlFor="star4"></label>
          <input
            id="star3"
            name="rating"
            value="3"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 3}
          />
          <label htmlFor="star3"></label>
          <input
            id="star2"
            name="rating"
            value="2"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 2}
          />
          <label htmlFor="star2"></label>
          <input
            id="star1"
            name="rating"
            value="1"
            type="radio"
            onChange={(event) => setRating(parseInt(event.target.value))}
            checked={rating === 1}
          />
          <label htmlFor="star1"></label>
        </div>
      </div>

      <Button color="purple" type="submit">
        ENVIAR
      </Button>
    </form>
  );
};

export default ProductForm;
