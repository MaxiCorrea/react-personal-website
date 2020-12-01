import * as React from "react";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import { NavBarContainer } from "../components/navigation/NavBarContainer/NavBarContainer";
import { NavBarLogo } from "../components/navigation/NavBarLogo/NavBarLogo";

export const Application: React.FC = () => {
  return (
    <div>
      <NavBar>
        <NavBarContainer>
          <NavBarLogo>Maximiliano Correa</NavBarLogo>
        </NavBarContainer>
      </NavBar>
    </div>
  );
};
