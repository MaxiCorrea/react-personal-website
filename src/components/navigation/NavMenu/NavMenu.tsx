import * as React from "react";
import { useStyles } from "./NavMenu.styles";

export const NavMenu: React.FC = (props) => {
  const classes = useStyles();
  return <ul className={classes.root}>{props.children}</ul>;
};
