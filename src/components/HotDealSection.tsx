import { Badge, Button, Heading, Paragraph } from "dracula-ui";
import { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../assets/rrrainbow.svg";
import theme from "../utils/theme";

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
`;

const HotDealSection = (props: Props) => {
  const today = new Date();
  const daysUntilSunday = 7 - today.getDay();
  const [days, setDays] = useState<number>(daysUntilSunday);
  const [hours, setHours] = useState<number>(Math.floor(daysUntilSunday * 24));
  const [mins, setMins] = useState<number>(
    Math.floor((daysUntilSunday * 24 - hours) * 60)
  );
  const [secs, setSecs] = useState<number>(
    Math.floor(((daysUntilSunday * 24 - hours) * 60 - mins) * 60)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Diminui 1 segundo do tempo restante a cada intervalo
      setSecs((prevSecs) => {
        if (prevSecs === 0) {
          // Quando chegar a 0 segundos, reinicia para 60 e diminui 1 minuto
          setMins((prevMins) => {
            if (prevMins === 0) {
              // Quando chegar a 0 minutos, reinicia para 34 e diminui 1 hora
              setHours((prevHours) => {
                if (prevHours === 0) {
                  // Quando chegar a 0 hours, reinicia para 10 e diminui 1 dia
                  setDays((prevDays) => {
                    if (prevDays === 0) {
                      // Quando chegar a 0 dias, para o intervalo e zera o tempo
                      clearInterval(intervalId);
                    }
                    return prevDays - 1;
                  });
                  return 10;
                }
                return prevHours - 1;
              });
              return 34;
            }
            return prevMins - 1;
          });
          return 60;
        }
        return prevSecs - 1;
      });
    }, 1000);
    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <WrapperHotDealSection>
      <div className="hot-deal">
        <ul className="hot-deal-countdown">
          <li>
            <Badge color="cyan" variant="subtle">
              {days.toString()}
              <span> Dias</span>
            </Badge>
          </li>
          <li>
            <Badge color="cyan" variant="subtle">
              {hours.toString()}
              <span> horas</span>
            </Badge>
          </li>
          <li>
            <Badge color="cyan" variant="subtle">
              {mins.toString()}
              <span> Minutos</span>
            </Badge>
          </li>
          <li>
            <Badge color="cyan" variant="subtle">
              {secs.toString()}
              <span> Segundos</span>
            </Badge>
          </li>
        </ul>
        <Heading>Promoção só essa semana!</Heading>
        <Paragraph size="lg">Nova Coleção em até 50% OFF</Paragraph>
        <Button size="lg">Comprar Agora</Button>
      </div>
    </WrapperHotDealSection>
  );
};

export default HotDealSection;
