import * as React from "react";
import { useStyles } from "./ContactContainer.styles";

interface ContactContainerProps {
  children?: React.ReactNode;
}

export const ContactContainer: React.FC<ContactContainerProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
