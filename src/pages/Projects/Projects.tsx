import * as React from "react";
import { useStyles } from "./Projects.styles";
import { ProjectsContainer } from "../../components/projects/ProjectsContainer/ProjectsContainer";
import { ProjectsTitle } from "../../components/projects/ProjectsTitle/ProjectsTitle";
import { ProjectsVideo } from "../../components/projects/ProjectsVideo/ProjectsVideo";
import { Grid } from "@material-ui/core";

export const Projects: React.FC = () => {
  const classes = useStyles();
  const [projectsUrls] = React.useState([
    "https://www.youtube.com/watch?v=jgtCUWV0xX4",
    "https://www.youtube.com/watch?v=apmGg1ClVno",
    "https://www.youtube.com/watch?v=J6sBftt9g-Y",
    "https://www.youtube.com/watch?v=bY5mmgTBGqI",
  ]);

  return (
    <div className={classes.root}>
      <ProjectsContainer>
        <ProjectsTitle text={"Projects"} />
        <Grid container justify="flex-start">
          {projectsUrls.map((url, key) => (
            <ProjectsVideo key={key} url={url} />
          ))}
        </Grid>
      </ProjectsContainer>
    </div>
  );
};
