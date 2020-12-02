import * as React from "react";
import { useStyles } from "./NavContainer.styles";

interface NavContainerProps {
  children?: React.ReactNode;
}

export const NavContainer: React.FC<NavContainerProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
