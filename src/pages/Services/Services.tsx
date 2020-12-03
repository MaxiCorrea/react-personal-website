import * as React from "react";
import { useStyles } from "./Services.styles";

export const Services: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
