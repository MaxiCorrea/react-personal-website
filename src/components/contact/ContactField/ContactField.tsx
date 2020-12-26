import { TextField } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./ContactField.styles";

interface ContactFieldProps {
  children?: React.ReactNode;
  caption: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
}

export const ContactField: React.FC<ContactFieldProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      inputMode={props.inputMode}
      className={classes.root}
      label={props.caption}
    ></TextField>
  );
};
