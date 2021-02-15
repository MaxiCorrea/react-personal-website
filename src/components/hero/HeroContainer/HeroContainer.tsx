import * as React from "react";
import { useStyles } from "./HeroContainer.styles";

export const HeroContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
