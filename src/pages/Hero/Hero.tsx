import * as React from "react";
import { HeroContainer } from "../../components/hero/HeroContainer/HeroContainer";
import { HeroIm } from "../../components/hero/HeroIm/HeroIm";
import { HeroInfo } from "../../components/hero/HeroInfo/HeroInfo";
import { HeroTyping } from "../../components/hero/HeroTyping/HeroTyping";
import { useStyles } from "./Hero.styles";

export const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroContainer>
        <HeroInfo>
          <HeroIm fullName={"Maximiliano Correa"} />
          <HeroTyping prefix={"I'm a "} text="Maxi" />
        </HeroInfo>
      </HeroContainer>
    </div>
  );
};
