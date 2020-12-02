import * as React from "react";
import { useStyles } from "./NavItem.styles";

interface NavItemProps {
  children?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const classes = useStyles();
  return <li className={classes.root}>{props.children}</li>;
};
