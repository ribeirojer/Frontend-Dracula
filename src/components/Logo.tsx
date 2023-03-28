import { Paragraph } from "dracula-ui";
import styled from "styled-components";
import theme from "../utils/theme";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
  line-height: 3rem;
  font-family: "Merienda", cursive;
  font-weight: 700;
  span {
    color: ${theme.dracula.purple};
  }
`;

const Logo = (props: Props) => {
  return (
    <Wrapper>
      <div>
        Drácul<span>a</span>
      </div>
      <Paragraph color="purpleCyan">E-commerce</Paragraph>
    </Wrapper>
  );
};

export default Logo;
