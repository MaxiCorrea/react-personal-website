import * as React from "react";
import { SideContainer } from "../SideContainer/SideContainer";
import { SideIcon } from "../SideIcon/SideIcon";
import { SideWrapper } from "../SideWrapper/SideWrapper";
import { SideMenu } from "../SideMenu/SideMenu";
import { SideLink } from "../SideLink/SideLink";

export interface SideProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Side: React.FC<SideProps> = (props) => {
  return (
    <SideContainer {...props}>
      <SideIcon {...props} />
      <SideWrapper>
        <SideMenu>
          <SideLink to="/about" {...props}>
            About
          </SideLink>
          <SideLink to="/services" {...props}>
            Services
          </SideLink>
          <SideLink to="/contact" {...props}>
            Contact
          </SideLink>
        </SideMenu>
      </SideWrapper>
    </SideContainer>
  );
};
