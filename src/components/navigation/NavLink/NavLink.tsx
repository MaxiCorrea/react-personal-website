import * as React from "react";
import { useStyles } from "./NavLink.styles";
import { Link as LinkScrool } from "react-scroll";

interface NavLinkProps {
  to: string;
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles();
  return (
    <LinkScrool to={props.to} spy={true} smooth={true} className={classes.root}>
      {props.children}
    </LinkScrool>
  );
};
