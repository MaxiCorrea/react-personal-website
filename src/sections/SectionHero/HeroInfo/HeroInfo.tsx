import * as React from "react";
import { useStyles } from "./HeroInfo.styles";

export const HeroInfo: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
