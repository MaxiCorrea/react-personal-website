import * as React from "react";
import { useStyles } from "./HeroIm.styles";

interface HeroImProps {
  fullName: string;
}

export const HeroIm: React.FC<HeroImProps> = (props) => {
  const classes = useStyles();
  return <p className={classes.root}>{"I'm " + props.fullName}</p>;
};
