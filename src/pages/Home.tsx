import { useEffect } from "react";
import HotDealSection from "../components/HotDealSection";
import Navigation from "../components/Navigation";
import Newsletter from "../components/Newsletter";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
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
      <SectionB></SectionB>
      <HotDealSection></HotDealSection>
      <SectionC></SectionC>
      <Newsletter></Newsletter>
    </>
  );
};
export default Home;
