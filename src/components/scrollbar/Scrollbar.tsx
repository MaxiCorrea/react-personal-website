import * as React from "react";
import { useStyles } from "./Scrollbar.styles";

export const Scrollbar: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes["@global"]}>{props.children}</div>;
};
