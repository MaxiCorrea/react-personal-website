import * as React from "react";
import { useStyles } from "./NavItem.styles";

export const NavItem: React.FC = (props) => {
  const classes = useStyles();
  return <li className={classes.root}>{props.children}</li>;
};
