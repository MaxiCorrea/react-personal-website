import * as React from "react";
import { useStyles } from "./AboutTitle.styles";

interface AboutTitleProps {
  text: string;
}

export const AboutTitle: React.FC<AboutTitleProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>{props.text}</p>
    </div>
  );
};
