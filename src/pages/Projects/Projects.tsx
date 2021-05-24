import * as React from "react";
import { useStyles } from "./Projects.styles";
import { ProjectsContainer } from "components/projects/ProjectsContainer/ProjectsContainer";
import { ProjectsTitle } from "components/projects/ProjectsTitle/ProjectsTitle";

export const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProjectsContainer>
        <ProjectsTitle text={"Projects"} />
      </ProjectsContainer>
    </div>
  );
};
