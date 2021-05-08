import * as React from "react";
import { useStyles } from "./ContactForm.styles";

export const ContactForm: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.container}>form</div>;
};
