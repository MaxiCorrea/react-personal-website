import * as React from "react";
import { useStyles } from "./NavBarContainer.styles";

export const NavBarContainer: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
