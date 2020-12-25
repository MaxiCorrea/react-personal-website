import * as React from "react";
import { useStyles } from "./ContactForm.styles";

export const ContactForm: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
