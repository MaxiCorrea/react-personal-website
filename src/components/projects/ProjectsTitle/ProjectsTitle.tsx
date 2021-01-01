import * as React from "react";
import { useStyles } from "./ProjectsTitle.styles";

interface ProjectsTitleProps {
  text: string;
}

export const ProjectsTitle: React.FC<ProjectsTitleProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>{props.text}</p>
    </div>
  );
};
