import * as React from "react";
import { NavContainer } from "../NavContainer/NavContainer";
import { NavIcon } from "../NavIcon/NavIcon";
import { NavItem } from "../NavItem/NavItem";
import { NavLink } from "../NavLink/NavLink";
import { NavLogo } from "../NavLogo/NavLogo";
import { NavMenu } from "../NavMenu/NavMenu";
import { useStyles } from "./Nav.styles";

interface NavProps {
  children?: React.ReactNode;
  toggle: () => void;
}

export const Nav: React.FC<NavProps> = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <NavContainer>
        <NavLogo to={"/"}>Maximiliano Correa</NavLogo>
        <NavIcon toggle={props.toggle} />
        <NavMenu>
          <NavItem>
            <NavLink to={"/about"}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/services"}>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/contact"}>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </nav>
  );
};
