import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import { Footer } from "../components/footer/Footer/Footer";
import { ScrollUpButton } from "../components/scrollup/ScrollUpButton/ScrollUpButton";
import { ScrollUpContainer } from "../components/scrollup/ScrollUpContainer/ScrollUpContainer";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Hero } from "../pages/Hero/Hero";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
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
      <Element name="/projects">
        <Projects />
      </Element>
      <Element name="/contact">
        <Contact />
      </Element>
      <Footer/>
      <ScrollUpContainer>
        <ScrollUpButton/>
      </ScrollUpContainer>
    </Router>
  );
};
