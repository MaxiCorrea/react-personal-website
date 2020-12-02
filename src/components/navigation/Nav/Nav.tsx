import * as React from "react";
import { useStyles } from "./Nav.styles";

interface NavProps {
  children?: React.ReactNode;
}

export const Nav: React.FC<NavProps> = (props) => {
  const classes = useStyles();
  return <nav className={classes.root}>{props.children}</nav>;
};
