import React from 'react'
import {MenuIcon, MenuItem, NavMenuContainer} from "../styles/Navbar.styled";
import {FlexContainer, PaddingContainer} from "../styles/Global.styled";
import {AiOutlineClose} from "react-icons/ai";
import {NavLinks, NavLinkType} from "../utils/Data";
import {motion} from "framer-motion";
import {slideInLeft} from "../utils/Variants";

const NavMenu: (props: { setOpenMenu: Function }) => JSX.Element = (props) => {
    return (
        <NavMenuContainer
        as={motion.div}
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <PaddingContainer left="5%" right="5%" top="2rem">
                <FlexContainer justify="flex-end" responsiveFlex={true}>
                    <MenuIcon
                        onClick={() => props.setOpenMenu(false)}
                        as={motion.a}
                        whileHover={{scale : 1.2}}
                    >
                        <AiOutlineClose/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            {/* Menu Items */}
            <PaddingContainer top="8%">
                <FlexContainer direction="column" align="center" responsiveFlex={true}>
                    {NavLinks.map((navLink: NavLinkType) =>
                        <MenuItem
                            key={navLink.id}
                            href={"#" + navLink.href}
                            onClick={() => props.setOpenMenu(false)}
                            as={motion.a}
                            whileHover={{scale : 1.2}}
                        >
                            {navLink.name}
                        </MenuItem>)}
                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer>
    )
}
export default NavMenu
