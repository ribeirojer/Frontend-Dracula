import { Heading } from "dracula-ui";
import React, { useState } from "react";

type Props = {};

const Success = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    // Aqui pode ser feita uma requisição de dados
    // ou outra operação que necessite de tempo
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Heading>Aguarde, estamos gerando o link de pagamento...</Heading>
      {isLoading && <CustomCircularProgress></CustomCircularProgress>}
    </div>
  );
};

export default Success;

const CustomCircularProgress = ({
  size = 40,
  color = "currentColor",
  thickness = 3.6,
}: any) => {
  const diameter = size + thickness * 2;

  return (
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
  );
};
