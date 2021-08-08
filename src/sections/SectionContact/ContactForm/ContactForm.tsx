import * as React from "react";
import { TextField } from "components/textfield/TextField";
import { useStyles } from "./ContactForm.styles";
import { Button } from "components/button/Button";

export const ContactForm: React.FC = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  
  return (
    <div className={classes.container}>
      <p className={classes.title}>Send me a message</p>
      <TextField
        id="name"
        style={{ width: "90%" }}
        onClear={() => {setName("")}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setName(e.target.value);}}
        value={name}
        label="Name"
      />
      <div style={{ height: "15px" }}></div>
      <TextField
        id="email"
        style={{ width: "90%" }}
        value={email}
        onClear={() => {setEmail("")}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setEmail(e.target.value);}}
        label="Email"
      />
      <div style={{ height: "15px" }}></div>
      <TextField
        id="phone-number"
        style={{ width: "90%" }}
        value={phone}
        onClear={() => {setPhone("")}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setPhone(e.target.value);}}
        label="Phone Number"
      />
      <div style={{ height: "15px" }}></div>
      <TextField
        id="message-content"
        rows={5}
        multiline
        style={{ width: "90%" }}
        value={message}
        onClear={() => {setMessage("")}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setMessage(e.target.value);}}
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
