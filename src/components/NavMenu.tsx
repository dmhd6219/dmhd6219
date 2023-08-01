import React from 'react'
import {MenuIcon, MenuItem, NavMenuContainer} from "../styles/Navbar.styled";
import {FlexContainer, PaddingContainer} from "../styles/Global.styled";
import {AiOutlineClose} from "react-icons/ai";
import {NavLinks, NavLinkType} from "../utils/Data";

const NavMenu: (props: { setOpenMenu: Function }) => JSX.Element = (props) => {
    return (
        <NavMenuContainer>
            <PaddingContainer left="5%" right="5%" top="2rem">
                <FlexContainer justify="flex-end">
                    <MenuIcon onClick={() => props.setOpenMenu(false)}>
                        <AiOutlineClose/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            {/* Menu Items */}
            <PaddingContainer top="8%">
                <FlexContainer direction="column" align="center">
                    {NavLinks.map((navLink: NavLinkType) =>
                        <MenuItem
                            key={navLink.id}
                            href={"#" + navLink.href}
                            onClick={() => props.setOpenMenu(false)}
                        >
                            {navLink.name}
                        </MenuItem>)}
                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer>
    )
}
export default NavMenu
