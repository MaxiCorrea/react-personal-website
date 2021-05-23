import * as React from "react";
import { useStyles } from "./TextField.style";
import { TextField as MaterialUITextField } from "@material-ui/core";

interface TextFieldProps {
  label: string;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const classes = useStyles();
  return (
    <MaterialUITextField
      variant="outlined"
      size="small"
      label={props.label}
      classes={{ root: classes.root }}
    />
  );
};
