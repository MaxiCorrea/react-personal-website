import * as React from "react";
import { useStyles } from "./FooterContainer.styles";

export const FooterContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};
