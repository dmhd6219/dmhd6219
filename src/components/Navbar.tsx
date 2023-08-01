import React, {useEffect, useState} from 'react'
import {Logo, MenuIcon, NavbarContainer} from "../styles/Navbar.styled";
import {Container, FlexContainer, PaddingContainer, SecondaryText} from "../styles/Global.styled";
import {GiHamburgerMenu} from "react-icons/gi";
import NavMenu from "./NavMenu";
import {Theme} from "../utils/Theme";
import {AnimatePresence, motion} from "framer-motion";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [sticky, setSticky] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])


    return (
        <NavbarContainer bgColor={sticky ? Theme.colors.primary : 'transparent'}>
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex={true}>
                        {/* Left Section */}
                        <Logo>
                            dmhd<SecondaryText>6219</SecondaryText>
                        </Logo>

                        {/* Right Section */}
                        <MenuIcon
                            onClick={() => setOpenMenu(true)}
                            as={motion.a}
                            whileHover={{scale : 1.2}}
                        >
                            <GiHamburgerMenu/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>

                <AnimatePresence>
                    {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
                </AnimatePresence>

            </PaddingContainer>
        </NavbarContainer>
    )
}
export default Navbar
