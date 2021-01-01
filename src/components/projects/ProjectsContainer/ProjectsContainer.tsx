import * as React from "react";
import { useStyles } from "./ProjectsContainer.styles";

interface ProjectsContainerProps {
  children?: React.ReactNode;
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
