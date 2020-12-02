import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "../components/navigation/Nav/Nav";
import { NavContainer } from "../components/navigation/NavContainer/NavContainer";
import { NavLogo } from "../components/navigation/NavLogo/NavLogo";
import { NavIcon } from "../components/navigation/NavIcon/NavIcon";
import { NavMenu } from "../components/navigation/NavMenu/NavMenu";
import { NavItem } from "../components/navigation/NavItem/NavItem";
import { NavLink } from "../components/navigation/NavLink/NavLink";

export const Application: React.FC = () => {
  return (
    <Router>
      <Nav>
        <NavContainer>
          <NavLogo to={"/"}>Maximiliano Correa</NavLogo>
          <NavIcon />
          <NavMenu>
            <NavItem>
              <NavLink to={"about"}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"services"}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"contact"}>Contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Router>
  );
};
