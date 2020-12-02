import * as React from "react";
import { useStyles } from "./NavMenu.styles";

interface NavMenuProps {
  children?: React.ReactNode;
}

export const NavMenu: React.FC<NavMenuProps> = (props) => {
  const classes = useStyles();
  return <ul className={classes.root}>{props.children}</ul>;
};
