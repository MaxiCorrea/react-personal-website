import * as React from "react";
import { useStyles } from "./About.styles";

export const About: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
