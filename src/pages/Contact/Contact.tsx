import * as React from "react";
import { ContactContainer } from "../../components/contact/ContactContainer/ContactContainer";
import { ContactField } from "../../components/contact/ContactField/ContactField";
import { ContactForm } from "../../components/contact/ContactForm/ContactForm";
import { ContactSend } from "../../components/contact/ContactSend/ContactSend";
import { ContactTitle } from "../../components/contact/ContactTitle/ContactTitle";
import { useStyles } from "./Contact.styles";

export const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContactContainer>
        <ContactTitle text={"Contact"} />
        <ContactForm>
          <ContactField caption={"Full Name"} inputMode={"text"} />
          <ContactField caption={"Email Address"} inputMode={"email"} />
          <ContactSend caption={"Send Message"}/>
        </ContactForm>
      </ContactContainer>
    </div>
  );
};
