import * as React from "react";
import { useStyles } from "./ContactInfo.styles";
import {
  EmailCircleIcon,
  LinkedinCircleIcon,
  LocationCircleIcon,
  PhoneCircleIcon,
} from "../ContactIcons/ContactIcons";

interface ContactInfoProps {
  location: string;
  linkendin: string;
  phone: string;
  mail: string;
}

const CircleIconAndTextWrapper: React.FC<{ text: string }> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.iconAndTextContainer}>
      {props.children}
      <p>{props.text}</p>
    </div>
  );
};

export const ContactInfo: React.FC<ContactInfoProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircleIconAndTextWrapper text={props.location}>
        <LocationCircleIcon color="primary" />
      </CircleIconAndTextWrapper>
      <CircleIconAndTextWrapper text={props.linkendin}>
        <LinkedinCircleIcon color="primary" />
      </CircleIconAndTextWrapper>
      <CircleIconAndTextWrapper text={props.phone}>
        <PhoneCircleIcon color="primary" />
      </CircleIconAndTextWrapper>
      <CircleIconAndTextWrapper text={props.mail}>
        <EmailCircleIcon color="primary" />
      </CircleIconAndTextWrapper>
    </div>
  );
};
