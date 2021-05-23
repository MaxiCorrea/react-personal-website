import * as React from "react";
import { TextField } from "../../textfield/TextField";
import { useStyles } from "./ContactForm.styles";

export const ContactForm: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField label="Nombre" />
      <TextField label="Mensaje" />
    </div>
  );
};
