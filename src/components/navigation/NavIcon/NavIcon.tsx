import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./NavIcon.styles";

interface NavIconProps {
  children?: React.ReactNode;
  toggle: () => void;
}

export const NavIcon: React.FC<NavIconProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuIcon onClick={props.toggle} />
    </div>
  );
};
