import * as React from "react";
import { useStyles } from "./NavBar.styles";

export const NavBar: React.FC = () => {
  const classes = useStyles();
  return <nav className={classes.root} />;
};
