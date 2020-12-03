import * as React from "react";
import { useStyles } from "./SideWrapper.styles";

interface SideWrapperProps {
  children?: React.ReactNode;
}

export const SideWrapper: React.FC<SideWrapperProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
