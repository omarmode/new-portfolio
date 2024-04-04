import Hero from "./components/2-Hero/Hero";
import Header from "./components/1-Header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";
import Skills from "./components/6-Skills/Skills";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    });
  });
  const [showBtn, setshowBtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      {/* <div className="line" /> */}
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Skills />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
      {showBtn && (
        <a href="#up" style={{ color: "#fff" }}>
          <button className="scroll2Top icon-keyboard_arrow_up"></button>
        </a>
      )}
    </div>
  );
}

export default App;
