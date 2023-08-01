import React, {useEffect, useState} from 'react'
import {Logo, MenuIcon, NavbarContainer} from "../styles/Navbar.styled";
import {Container, FlexContainer, PaddingContainer} from "../styles/Global.styled";
import {GiHamburgerMenu} from "react-icons/gi";
import NavMenu from "./NavMenu";
import {Theme} from "../utils/Theme";

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
                            dmhd6219
                        </Logo>

                        {/* Right Section */}
                        <MenuIcon onClick={() => setOpenMenu(true)}>
                            <GiHamburgerMenu/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>

                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
            </PaddingContainer>
        </NavbarContainer>
    )
}
export default Navbar
