import * as React from "react";
import { useStyles } from "./HeroTyping.styles";

interface HeroTypingProps {
  text: string;
}

export const HeroTyping: React.FC<HeroTypingProps> = (props) => {
  const classes = useStyles();
  return <p className={classes.root}>{props.text}</p>;
};
