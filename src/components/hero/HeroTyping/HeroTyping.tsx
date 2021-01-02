import * as React from "react";
import { useStyles } from "./HeroTyping.styles";

interface HeroTypingProps {
  prefix: string;
  text: string;
}

export const HeroTyping: React.FC<HeroTypingProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.static}>{props.prefix}</p>
      <p className={classes.dinamic}>{props.text}</p>
    </div>
  );
};
