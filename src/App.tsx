import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "dracula-ui/styles/dracula-ui.css";
import whats from "../src/assets/WhatsApp.png";
import styled from "styled-components";

const WrapperWhatsapp = styled.a`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  .logo {
    width: 4rem;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: center bottom;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: rotate(-3deg) scale(0.98);
    }
    20% {
      transform: rotate(3deg) scale(1.02);
    }
    30% {
      transform: rotate(-3deg) scale(1);
    }
    40% {
      transform: rotate(3deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

function App() {
  return (
    <>
      <Header />
      <Outlet />{" "}
      <WrapperWhatsapp
        target="_blank"
        rel="external"
        className="whats"
        href="https://api.whatsapp.com/send?phone=5547988460695&amp;text=Olá,%20tudo%20bem?"
      >
        <img src={whats} className="logo" />
      </WrapperWhatsapp>
      <Footer />
    </>
  );
}

export default App;
