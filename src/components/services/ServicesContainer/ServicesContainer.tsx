import * as React from "react";
import { useStyles } from "./ServicesContainer.styles";

export const ServicesContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
