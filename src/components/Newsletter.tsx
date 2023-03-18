import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
} from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    font-size: 16px;
    width: 250px;
  }

  .newsletter-btn {
    background-color: #00bfff;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .newsletter-btn:hover {
    background-color: #009acd;
  }

  .newsletter-follow {
    display: flex;
    justify-content: center;
  }

  .newsletter-follow li {
    list-style: none;
    margin-right: 10px;
    font-size: 24px;
    color: #00bfff;
    transition: all 0.3s ease;
  }

  .newsletter-follow li:hover {
    transform: translateY(-5px);
  }
`;

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <Container>
      <p>
        Inscreva-se na <strong>NEWSLETTER</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="newsletter-btn" type="submit">
          <Envelope></Envelope> Inscrever
        </button>
      </form>
      <ul className="newsletter-follow">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookLogo></FacebookLogo>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <TwitterLogo></TwitterLogo>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramLogo></InstagramLogo>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" target="_blank">
            <PinterestLogo></PinterestLogo>
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Newsletter;
