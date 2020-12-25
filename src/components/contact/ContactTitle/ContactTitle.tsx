import * as React from "react";
import { useStyles } from "./ContactTitle.styles";

interface ContactTitleProps {
  text: string;
}

export const ContactTitle: React.FC<ContactTitleProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>{props.text}</p>
    </div>
  );
};
