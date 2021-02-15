import * as React from "react";
import { useStyles } from "./ScrollUpContainer.styles";
import ScrollToTop from "react-scroll-up";

export const ScrollUpContainer: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ScrollToTop showUnder={160} duration={1000}>
        {props.children}
      </ScrollToTop>
    </div>
  );
};
