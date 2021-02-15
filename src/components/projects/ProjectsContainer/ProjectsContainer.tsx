import * as React from "react";
import { useStyles } from "./ProjectsContainer.styles";

export const ProjectsContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
