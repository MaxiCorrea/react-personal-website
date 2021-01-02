import * as React from "react";
import { useStyles } from "./HeroInfo.styles";

interface HeroInfoProps {
  children?: React.ReactNode;
}

export const HeroInfo: React.FC<HeroInfoProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
