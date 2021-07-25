import * as React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import { useStyles } from "./ContactIcons.styles";

const CircleContainer: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.circleContainer}>{props.children}</div>;
};

interface ContactIconProps {
  color?: "inherit" | "disabled" | "primary" | "action" | "secondary" | "error";
}

export const LocationCircleIcon: React.FC<ContactIconProps> = (props) => {
  return (
    <CircleContainer>
      <LocationOnIcon color={props.color} />
    </CircleContainer>
  );
};

export const LinkedinCircleIcon: React.FC<ContactIconProps> = (props) => {
  return (
    <CircleContainer>
      <LinkedInIcon color={props.color} />
    </CircleContainer>
  );
};

export const PhoneCircleIcon: React.FC<ContactIconProps> = (props) => {
  return (
    <CircleContainer>
      <PhoneIcon color={props.color} />
    </CircleContainer>
  );
};

export const EmailCircleIcon: React.FC<ContactIconProps> = (props) => {
  return (
    <CircleContainer>
      <MailIcon color={props.color} />
    </CircleContainer>
  );
};
