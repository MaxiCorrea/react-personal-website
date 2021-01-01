import * as React from "react";
import { useStyles } from "./ProjectsVideo.styles";
import { Grid } from "@material-ui/core";
import ReactPlayer from "react-player";

interface ProjectsVideoProps {
  url : string;
}

export const ProjectsVideo: React.FC<ProjectsVideoProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <div className={classes.container}>
        <ReactPlayer
          className={classes.video}
          url={props.url}
          width="100%"
          height="250px"
          controls
        />
      </div>
    </Grid>
  );
};
