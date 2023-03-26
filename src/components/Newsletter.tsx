import { useState } from "react";
import styled from "styled-components";
import theme from "../utils/theme";
import background from "../assets/rrrainbow.svg";
import { Anchor, Button, Checkbox, Heading, Input, Radio } from "dracula-ui";

type Props = {};

const Container = styled.section`
  display: flex;
  height: 250px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: ${theme.dracula.black};
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
  box-shadow: 0px 0px 8px #ffffff33;

  .newsletter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h2 {
      text-align: center;
    }
    form {
      display: flex;
      gap: 1.5rem;
      button {
        display: flex;
        min-width: 9rem;
      }
    }
    .term {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`;

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <Container>
      <div className="newsletter">
        <Heading size="xl">Inscreva-se na NEWSLETTER</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            color="green"
            size={"lg"}
            placeholder="Digite seu melhor email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button size="lg" width="9rem">
            Inscrever
          </Button>
        </form>
        <div className="term">
          <Checkbox id="green" color="green" name="green" />
          <label htmlFor="green" className="drac-text drac-text-white">
            Concordo em receber e-mails da
            <Anchor href="#" hoverColor="green" target={"_blank"}>
              {" "}Dracula E-commerce
            </Anchor>
          </label>
          {error && <span>{error}</span>}
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
