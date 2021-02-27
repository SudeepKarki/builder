import React from "react";
import About from "./sections/about/about";
import Banner from "./sections/banner/banner";
import FooterTop from "./sections/footerTop/footerTop";
import Projects from "./sections/projects/projects";
import Testimonials from "./sections/testimonials/testimonials";

function Landing() {
  return (
    <>
      <Banner />
      <Projects />
      <About />
      <Testimonials />
      <FooterTop />
    </>
  );
}

export default Landing;
