import * as React from "react";
import { ServicesContainer } from "../../components/services/ServicesContainer/ServicesContainer";
import { ServicesTitle } from "../../components/services/ServicesTitle/ServicesTitle";
import { useStyles } from "./Services.styles";

export const Services: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ServicesContainer>
        <ServicesTitle text={"Services"} />
      </ServicesContainer>
    </div>
  );
};
