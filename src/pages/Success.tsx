import { Anchor, Heading } from "dracula-ui";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }
`;

const Success = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const size = 40;
  const color = "currentColor";
  const thickness = 3.6;
  const diameter = size + thickness * 2;

  const location = useLocation();
  const data = location?.state as { link: string };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Wrapper>
      {isLoading && (
        <div>
          <Heading>Gerando o link de pagamento...</Heading>
          <svg
            width={diameter}
            height={diameter}
            viewBox={`0 0 ${diameter} ${diameter}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={size / 2}
              fill="none"
              stroke={color}
              strokeWidth={thickness}
            />
          </svg>
        </div>
      )}
      {!isLoading && (
        <div>
          <Heading>Link de pagamento gerado!</Heading>
          <Anchor color="green" href={data.link} target="_blank">
            Clique aqui para acessar
          </Anchor>
        </div>
      )}
    </Wrapper>
  );
};

export default Success;
