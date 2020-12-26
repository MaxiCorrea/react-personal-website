import * as React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./ContactSend.styles";

interface ContactSendProps {
  caption: string;
}

export const ContactSend: React.FC<ContactSendProps> = (props) => {
  const classes = useStyles();
  return (
    <Button color={"primary"} className={classes.root}>
      {props.caption}
    </Button>
  );
};
