import * as React from "react";
import { useStyles } from "./Hero.styles";

export const Hero : React.FC = () => {
    const classes = useStyles();
    return <div className={classes.root}></div>
}