import React from "react";
import { Route } from "react-router-dom";
import Footer from "../parts/footer/footer";
import HeaderNav from "../parts/header/header";
import AboutUs from "./aboutUs/aboutUs";
import Contact from "./contact/contact";
import Landing from "./landing/landing";
import ProjectPage from "./projects/projects";

function Pages() {
  return (
    <>
      <HeaderNav />
      <Route path="/" exact component={Landing} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/projects" component={ProjectPage} />
      <Route path="/contact-us" component={Contact} />
      <Footer />
    </>
  );
}

export default Pages;
