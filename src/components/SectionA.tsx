import shop01 from "../assets/shop01.png";
import shop02 from "../assets/shop03.png";
import shop03 from "../assets/shop02.png";
import styled from "styled-components";
import { Box, Button, Heading } from "dracula-ui";
import { useNavigate } from "react-router-dom";
import theme from "../utils/theme";

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
    &:hover{
      box-shadow: 0px 0px 2rem ${theme.dracula.cyan};
  }}
`;

const SectionA = (props: Props) => {
  const navigate = useNavigate()
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
          <Box key={item.srcImg} className="card" rounded="lg" color="purpleCyan" p="sm">
            <img src={item.srcImg} alt="" />
            <Heading color="black" size="xl">
              {item.type}
            </Heading>
            <Button onClick={()=>navigate(`/categories/${item.type}`)} variant="outline" color="purple" m="sm">
              Ver
            </Button>
          </Box>
        );
      })}
    </WrapperSectionA>
  );
};

export default SectionA;
