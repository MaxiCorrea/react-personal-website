import * as React from "react";

import { HeroIm } from "../HeroIm/HeroIm";
import { HeroInfo } from "../HeroInfo/HeroInfo";
import { HeroTyping } from "../HeroTyping/HeroTyping";

export const Hero: React.FC = (props) => {
  return (
    <HeroInfo>
      <HeroIm fullName={"Maximiliano Correa"} />
      <HeroTyping
        prefix={"I'm a "}
        texts={["Java Developer", "React Developer", "Web Developer"]}
        wait={150}
      />
    </HeroInfo>
  );
};
