import * as React from "react";
import { useStyles } from "./SideContainer.styles";

interface SideContainerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export const SideContainer: React.FC<SideContainerProps> = (props) => {
  const classes = useStyles({ isOpen: props.isOpen });
  return (
    <aside className={classes.root} onClick={props.toggle}>
      {props.children}
    </aside>
  );
};
