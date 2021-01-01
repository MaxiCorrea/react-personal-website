import * as React from "react";
import { useStyles } from "./ServicesContainer.styles";

interface ServicesContainerProps {
  children?: React.ReactNode;
}

export const ServicesContainer: React.FC<ServicesContainerProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
