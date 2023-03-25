import shop01 from "../assets/shop01.png";
import shop02 from "../assets/shop03.png";
import shop03 from "../assets/shop02.png";
import styled from "styled-components";
import theme from "../utils/theme";
import { Box, Button, Paragraph } from "dracula-ui";

type Props = {};

const WrapperSectionA = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  position: relative;
  padding: 2rem;
  img {
    width: 100%;
  }
  .card {
    width: 30%;
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
          <Box className="card" rounded="lg" color="purpleCyan" p="md">
            <img src={item.srcImg} alt="" />
            <Paragraph color="black">{item.type}</Paragraph>
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
