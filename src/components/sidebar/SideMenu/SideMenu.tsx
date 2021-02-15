import * as React from "react";
import { useStyles } from "./SideMenu.styles";

export const SideMenu: React.FC = (props) => {
  const classes = useStyles();
  return <ul className={classes.root}>{props.children}</ul>;
};
