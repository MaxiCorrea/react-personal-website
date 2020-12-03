import * as React from "react";
import { useStyles } from "./SideMenu.styles";

interface SideMenuProps {
  children?: React.ReactNode;
}

export const SideMenu: React.FC<SideMenuProps> = (props) => {
  const classes = useStyles();
  return <ul className={classes.root}>{props.children}</ul>;
};
