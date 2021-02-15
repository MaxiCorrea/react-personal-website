import * as React from "react";
import { useStyles } from "./ScrollUpButton.styles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { IconButton } from "@material-ui/core";

export const ScrollUpButton: React.FC = (props) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.root} aria-label={"scroll-up-button"}>
      <ArrowUpwardIcon className={classes.icon} />
    </IconButton>
  );
};
