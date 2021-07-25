import * as React from "react";
import { TextField } from "components/textfield/TextField";
import { useStyles } from "./ContactForm.styles";
import { Button } from "components/button/Button";

export const ContactForm: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.title}>Send me a message</p>
      <TextField
        id="name"
        style={{ width: "90%" }}
        onClear={() => {}}
        label="Name"
      />
      <div style={{ height: "15px" }}></div>
      <TextField
        id="email"
        style={{ width: "90%" }}
        onClear={() => {}}
        label="Email"
      />
      <div style={{ height: "15px" }}></div>
      <TextField
        id="phone-number"
        style={{ width: "90%" }}
        onClear={() => {}}
        label="Phone Number"
      />
      <div style={{ height: "15px" }}></div>
      <TextField
        id="message-content"
        rows={5}
        multiline
        style={{ width: "90%" }}
        onClear={() => {}}
        label="Message"
      />
      <div style={{ height: "15px" }}></div>
      <Button
        area-label="send-message"
        style={{ width: "90%" }}
        caption="Send Message"
        color="primarygreen"
        onClick={() => {}}
      />
      <div style={{ height: "15px" }}></div>
    </div>
  );
};
