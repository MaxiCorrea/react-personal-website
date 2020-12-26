import * as React from "react";
import { useStyles } from "./ContactForm.styles";

interface ContactFormProps {
  children?: React.ReactNode;
}

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}> {props.children}</div>;
};
