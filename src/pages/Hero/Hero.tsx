import * as React from "react";
import { HeroTyping } from "../../components/hero/HeroTyping/HeroTyping";
import { useStyles } from "./Hero.styles";

export const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroTyping text="Maxi" />
    </div>
  );
};
