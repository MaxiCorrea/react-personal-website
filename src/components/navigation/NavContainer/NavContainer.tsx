import * as React from "react";
import { useStyles } from "./NavContainer.styles";

export const NavContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
