import { useState } from "react";
import styled from "styled-components";
import theme from "../utils/theme";
import background from "../assets/rrrainbow.svg";
import { Anchor, Button, Checkbox, Heading, Input, Radio } from "dracula-ui";
import { AuthService } from "../services/AuthService";

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
      flex-direction: column;
      div {
        gap: 1.5rem;
        display: flex;
      }
      button {
        min-width: 9rem;
      }
      span {
        margin: 0.5rem 0 0 0.5rem;
      }
    }
    .term {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
  @media (max-width: 600px) {
    .newsletter {
      width: 90%;
    }
    .term a {
      display: block;
    }
  }
`;

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setError("Campo de email vazio.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Formato de email inválido.");
      return;
    }
    if (!checked) {
      setError("Você precisa concordar em receber os e-mails.");
      return;
    }

    AuthService.newsletter(email)
      .then((response) => {
        setEmail("");
        setError("");
        setChecked(false);
        alert("Inscrição realizada com sucesso!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container>
      <div className="newsletter">
        <Heading size="xl">Inscreva-se na NEWSLETTER</Heading>
        <form onSubmit={handleSubmit}>
          <div>
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
          </div>
          {error && <span className="drac-text drac-text-red">{error}</span>}
        </form>
        <div className="term">
          <Checkbox
            id="green"
            color="green"
            name="green"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="green" className="drac-text drac-text-white">
            Concordo em receber e-mails da
            <Anchor href="#" hoverColor="green" target={"_blank"}>
              {" "}
              Dracula E-commerce
            </Anchor>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
