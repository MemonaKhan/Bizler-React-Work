import React from "react";
import BannerLeft from "../components/BannerLeft";
import AboutContent from "../components/AboutContent";
import AboutDetail from "../sections/AboutDetail";
import AboutQualities from "../sections/AboutQualities";
import Ourteam from "../sections/Ourteam";
import Counter from "../components/Counter";

function About() {
  return (
    <>
      <BannerLeft heading="About Us" />
      <AboutContent />
      <AboutQualities />
      <AboutDetail />
      <section id="counter" className="counter-inner">
        <Counter />
        <div className="overlay"></div>
      </section>
      <Ourteam />
    </>
  );
}

export default About;
