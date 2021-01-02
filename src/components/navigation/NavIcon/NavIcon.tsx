import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./NavIcon.styles";
import { IconButton } from "@material-ui/core";

interface NavIconProps {
  children?: React.ReactNode;
  toggle: () => void;
}

export const NavIcon: React.FC<NavIconProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton aria-label={"mobile-nav-button"} onClick={props.toggle}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};
