import * as React from "react";
import { useStyles } from "./ServicesTitle.styles";

interface ServicesTitleProps {
  text: string;
}

export const ServicesTitle: React.FC<ServicesTitleProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>{props.text}</p>
    </div>
  );
};
