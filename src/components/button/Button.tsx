import * as React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { useStyles } from "./Button.styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface IButtonProps {
  onClick: (...args: any[]) => void;
  onChange?: (...args: any[]) => void;
  caption: string;
  color: colorType;
  disabled?: boolean;
  className?: string;
  component?: React.ElementType<any>;
  type?: string;
  style? : CSSProperties,
}

type colorType = "primary" | "secondary" | "primarygreen";

export const Button: React.FC<IButtonProps> = (props) => {
  const classes = useStyles();
  const className =
    props.color === "primarygreen"
      ? classes.primarygreen
      : props.color === "primary"
      ? props.disabled === true
        ? classes.primaryDisabled
        : classes.primary
      : props.disabled === true
      ? classes.secundaryDisabled
      : classes.secondary;

  return (
    <MuiButton
      style={props.style}
      disabled={props.disabled}
      component={props.component ? props.component : "button"}
      onChange={props.onChange}
      type={props.type}
      variant="outlined"
      color="primary"
      className={`${className} ${props.className}`}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.caption}
    </MuiButton>
  );
};
