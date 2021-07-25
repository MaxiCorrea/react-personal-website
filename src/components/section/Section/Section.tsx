import * as React from "react";
import { useStyles } from "./Section.styles";

export const Section: React.FC = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      {props.children}
    </section>
  );
};
