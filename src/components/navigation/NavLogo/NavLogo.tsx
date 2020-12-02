import * as React from "react";
import { useStyles } from "./NavLogo.styles";
import { Link as LinkRouter } from "react-router-dom";

interface NavLogoProps {
  to: string;
  children?: React.ReactNode;
}

export const NavLogo: React.FC<NavLogoProps> = (props) => {
  const classes = useStyles();
  return (
    <LinkRouter to={props.to} className={classes.root}>
      {props.children}
    </LinkRouter>
  );
};
