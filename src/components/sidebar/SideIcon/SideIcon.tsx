import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./SideIcon.styles";
import { IconButton } from "@material-ui/core";

export interface SideIconProps {
  toggle: () => void;
}

export const SideIcon: React.FC<SideIconProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton aria-label={"mobile-close-button"} onClick={props.toggle}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};
