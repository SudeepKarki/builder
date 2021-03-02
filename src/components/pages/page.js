import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Footer from "../parts/footer/footer";
import HeaderNav from "../parts/header/header";
import Loader from "../parts/loader/Loader";
// import Landing from "./landing/landing";
// import AboutUs from "./aboutUs/aboutUs";
// import Contact from "./contact/contact";
// import ProjectPage from "./projects/projects";

const Landing = React.lazy(() => import("./landing/landing"));
const AboutUs = React.lazy(() => import("./aboutUs/aboutUs"));
const Contact = React.lazy(() => import("./contact/contact"));
const ProjectPage = React.lazy(() => import("./projects/projects"));

function Pages() {
  return (
    <>
      <HeaderNav />
      <Route path="/" exact>
        <Suspense fallback={<Loader />}>
          <Landing />
        </Suspense>
      </Route>
      <Route path="/about-us">
        <Suspense fallback={<Loader />}>
          <AboutUs />
        </Suspense>
      </Route>
      <Route path="/projects">
        <Suspense fallback={<Loader />}>
          <ProjectPage />
        </Suspense>
      </Route>
      <Route path="/contact-us">
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </Route>
      {/* <Route path="/" exact component={Landing} /> */}
      {/* <Route path="/about-us" component={AboutUs} /> */}
      {/* <Route path="/projects" component={ProjectPage} /> */}
      {/* <Route path="/contact-us" component={Contact} /> */}
      <Footer />
    </>
  );
}

export default Pages;
