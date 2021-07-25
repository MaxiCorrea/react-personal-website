import * as React from "react";
import { ContactContainer } from "../ContactContainer/ContactContainer";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { ContactForm } from "../ContactForm/ContactForm";

export const Contact: React.FC = (props) => {
  return (
    <ContactContainer>
      <ContactInfo
        linkendin="https://www.linkedin.com/"
        mail="anyfake@gmail.com.ar"
        location="Buenos Aires (Argentina)"
        phone="+540000000000"
      />
      <ContactForm />
    </ContactContainer>
  );
};
