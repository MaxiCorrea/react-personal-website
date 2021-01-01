import * as React from "react";
import { ContactContainer } from "../../components/contact/ContactContainer/ContactContainer";
import { ContactTitle } from "../../components/contact/ContactTitle/ContactTitle";
import { useStyles } from "./Contact.styles";

export const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContactContainer>
        <ContactTitle text={"Contact"} />
      </ContactContainer>
    </div>
  );
};
