import * as React from "react";
import { useStyles } from "./Sections.styles";

export const Sections: React.FC = (props) => {
  const classes = useStyles();
  return <main className={classes.root}>{props.children}</main>;
};
