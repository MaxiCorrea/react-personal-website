import * as React from "react";
import { useStyles } from "./FooterCopyright.styles";

export const FooterCopyright: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      &copy;Copyright {new Date().getFullYear()} developing by Maximiliano
      Correa
    </div>
  );
};
