import * as React from "react";
import { useStyles } from "./SideWrapper.styles";

export const SideWrapper: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
