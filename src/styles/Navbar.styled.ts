import styled from "styled-components";


interface NavbarContainerProps {
    bgColor: string
}

export const NavbarContainer = styled.div<NavbarContainerProps>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.3s ease-in;
  background-color: ${({bgColor}) => bgColor};

`

export const Logo = styled.p`
  font-size: 1.7rem;
  font-weight: ${({theme}) => theme.fonts.weight.medium};
  color: ${({theme}) => theme.colors.white};
`

export const MenuIcon = styled.a`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`

export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary_light};
  z-index: 1;

`

export const MenuItem = styled.a`
  color: ${({theme}) => theme.colors.white};
  font-size: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;
  text-decoration: none;

`