import React from "react";
import { FaBars } from "react-icons/fa";
import {
   Nav,
   NavbarContainer,
   NavLogo,
   NavLinks,
   NavMenu,
   NavItem,
   MobileIcon,
} from "./NavbarElements";

const Navbar = () => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to="/">Logo Here</NavLogo>
               <MobileIcon>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="about">About</NavLinks>
                  </NavItem>
               </NavMenu>
            </NavbarContainer>
         </Nav>
      </>
   );
};

export default Navbar;
