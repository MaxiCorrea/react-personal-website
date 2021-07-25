import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import { Footer } from "components/footer/Footer/Footer";
import { Scrollbar } from "components/scrollbar/Scrollbar";
import { ScrollUpButton } from "components/scrollup/ScrollUpButton/ScrollUpButton";
import { ScrollUpContainer } from "components/scrollup/ScrollUpContainer/ScrollUpContainer";
import { Home } from "pages/Home/Home";
import { Sections } from "components/section/Sections/Sections";
import { Section } from "components/section/Section/Section";
import { Contact } from "sections/SectionContact/Contact/Contact";

export const Application: React.FC = () => {
  return (
    <Scrollbar>
      <Router>
        <Home />
        <Sections>
          <Section>
            <Element name="/contact">
              <Contact />
            </Element>
          </Section>
        </Sections>
        <Footer />
        <ScrollUpContainer>
          <ScrollUpButton />
        </ScrollUpContainer>
      </Router>
    </Scrollbar>
  );
};
