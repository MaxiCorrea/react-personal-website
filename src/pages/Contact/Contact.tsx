import * as React from "react";
import { ContactContainer } from "../../components/contact/ContactContainer/ContactContainer";
import { ContactInfo } from "../../components/contact/ContactInfo/ContactInfo";
import { ContactTitle } from "../../components/contact/ContactTitle/ContactTitle";
import { useStyles } from "./Contact.styles";

export const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContactTitle text={"Contact"} />
      <ContactContainer>
        <ContactInfo
          linkendin="https://linkedin.com.ar"
          location="Eberth 11020 Buenos Aires"
          mail="jmaxicorrea@gmail.com"
          phone="+54 1234-4565"
        />
      </ContactContainer>
    </div>
  );
};
