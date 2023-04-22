import { useEffect } from "react";
import HotDealSection from "../components/HotDealSection";
import Navigation from "../components/Navigation";
import Newsletter from "../components/Newsletter";
import SectionA from "../components/SectionA";
import SectionC from "../components/SectionC";

type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <SectionA></SectionA>
      <SectionC
        title={"Novos Produtos"}
        startsIndex={0}
        endIndex={4}
      ></SectionC>
      <HotDealSection></HotDealSection>
      <SectionC title={"Mais Vendidos"} startsIndex={4} endIndex={8}></SectionC>
      <Newsletter></Newsletter>
    </>
  );
};
export default Home;
