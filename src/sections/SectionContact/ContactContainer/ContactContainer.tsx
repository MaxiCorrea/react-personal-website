import * as React from "react";
import { useStyles } from "./ContactContainer.styles";

export const ContactContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
