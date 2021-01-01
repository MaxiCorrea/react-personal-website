import * as React from "react";
import { AboutContainer } from "../../components/about/AboutContainer/AboutContainer";
import { AboutTitle } from "../../components/about/AboutTitle/AboutTitle";
import { useStyles } from "./About.styles";

export const About: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AboutContainer>
        <AboutTitle text={"About"} />
      </AboutContainer>
    </div>
  );
};
