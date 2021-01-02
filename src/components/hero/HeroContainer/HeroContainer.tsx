import * as React from "react";
import { useStyles } from "./HeroContainer.styles";

interface HeroContainerProps {
  children?: React.ReactNode;
}

export const HeroContainer: React.FC<HeroContainerProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
