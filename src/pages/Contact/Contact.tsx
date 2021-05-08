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
          linkendin=""
          location=""
          mail=""
          phone=""
        />
      </ContactContainer>
    </div>
  );
};
