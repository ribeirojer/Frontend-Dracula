import { Badge, Button, Heading, Paragraph } from "dracula-ui";
import { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../assets/rrrainbow.svg";
import theme from "../utils/theme";
import { useNavigate } from "react-router-dom";

type Props = {};

const WrapperHotDealSection = styled.section`
  display: flex;
  height: 400px;
  img {
    height: 100%;
    width: 100%;
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: ${theme.dracula.black};
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
  box-shadow: 0px 0px 8px #ffffff33;

  .hot-deal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .hot-deal {
      gap: 2rem;
      width: 100%;

      ul {
        width: 90%;
        flex-wrap: wrap;
        li {
          margin: 0.5rem;
        }
      }
      .drac-badge {
        padding: 0.5rem 1rem;
      }
    }
  }
`;

const HotDealSection = (props: Props) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const daysUntilSunday = 7 - now.getDay();
      const endOfWeek = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysUntilSunday,
        23,
        59,
        59,
        999
      );
      const timeDiff = endOfWeek.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <WrapperHotDealSection>
      <div className="hot-deal">
        <ul className="hot-deal-countdown">
          <li>
            <Badge color="cyan" variant="subtle">
              {timeRemaining.days.toString()}
              <span> Dias</span>
            </Badge>
          </li>
          <li>
            <Badge color="cyan" variant="subtle">
              {timeRemaining.hours.toString()}
              <span> horas</span>
            </Badge>
          </li>
          <li>
            <Badge color="cyan" variant="subtle">
              {timeRemaining.minutes.toString()}
              <span> Minutos</span>
            </Badge>
          </li>
          <li>
            <Badge color="cyan" variant="subtle">
              {timeRemaining.seconds.toString()}
              <span> Segundos</span>
            </Badge>
          </li>
        </ul>
        <Heading>Promoção só essa semana!</Heading>
        <Paragraph size="lg">Nova Coleção em até 50% OFF</Paragraph>
        <Button onClick={() => navigate("/shop?c=hotdeals")} size="lg">
          Comprar Agora
        </Button>
      </div>
    </WrapperHotDealSection>
  );
};

export default HotDealSection;
