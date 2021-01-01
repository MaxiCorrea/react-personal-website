import * as React from "react";
import { useStyles } from "./AboutContainer.styles";

interface AboutContainerProps {
  children?: React.ReactNode;
}

export const AboutContainer: React.FC<AboutContainerProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
