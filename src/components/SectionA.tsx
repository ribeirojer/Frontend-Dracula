import shop01 from "../assets/shop01.png";
import shop02 from "../assets/shop03.png";
import shop03 from "../assets/shop02.png";
import styled from "styled-components";
import { Box, Button, Heading } from "dracula-ui";

type Props = {};

const WrapperSectionA = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 3rem 2rem;

  .card {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin-top: 2rem;
      text-align: center;
    }
    img {
      width: 100%;
    }
    button {
      background-color:#282A36;
    }
  }
`;

const SectionA = (props: Props) => {
  const data = [
    {
      srcImg: shop01,
      type: "Notebooks",
    },
    {
      srcImg: shop02,
      type: "Acessórios",
    },
    {
      srcImg: shop03,
      type: "Câmeras",
    },
  ];

  return (
    <WrapperSectionA>
      {data.map((item) => {
        return (
          <Box className="card" rounded="lg" color="purpleCyan" p="sm">
            <img src={item.srcImg} alt="" />
            <Heading color="black" size="xl">
              {item.type}
            </Heading>
            <Button variant="outline" color="purple" m="sm">
              Outline
            </Button>
          </Box>
        );
      })}
    </WrapperSectionA>
  );
};

export default SectionA;
