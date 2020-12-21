import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Hero } from "../pages/Hero/Hero";
import { Home } from "../pages/Home/Home";
import { Services } from "../pages/Services/Services";

export const Application: React.FC = () => {
  return (
    <Router>
      <Home />
      <Element name="/">
        <Hero />
      </Element>
      <Element name="/about">
        <About />
      </Element>
      <Element name="/services">
        <Services />
      </Element>
      <Element name="/contact">
        <Contact />
      </Element>
    </Router>
  );
};
