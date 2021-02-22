import * as React from "react";
import { FooterContainer } from "../FooterContainer/FooterContainer";
import { FooterCopyright } from "../FooterCopyright/FooterCopyright";
import { useStyles } from "./Footer.styles";

export const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <FooterContainer>
        <FooterCopyright />
      </FooterContainer>
    </footer>
  );
};
