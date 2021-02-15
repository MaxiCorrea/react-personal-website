import * as React from "react";
import { useStyles } from "./AboutContainer.styles";

export const AboutContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
