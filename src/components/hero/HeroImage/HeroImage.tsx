import * as React from "react";
import { useStyles } from "./HeroImage.styles";
import Avatar from "../../../assets/img/avatar.webp";

export const Heroimage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={Avatar.toString()}
        alt={"my avatar"}
      />
    </div>
  );
};
