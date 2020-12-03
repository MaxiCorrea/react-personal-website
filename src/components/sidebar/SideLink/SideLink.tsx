import * as React from "react";
import { Link as LinkScrool } from "react-scroll";
import { useStyles } from "./SideLink.styles";

interface SideLinkProps {
  children?: React.ReactNode;
  to: string;
}

export const SideLink: React.FC<SideLinkProps> = (props) => {
  const classes = useStyles();
  return (
    <LinkScrool to={props.to} className={classes.root}>
      {props.children}
    </LinkScrool>
  );
};