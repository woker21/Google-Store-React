import { useState } from 'react';
import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";
import NavLinks from "./NavLinks";


const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;

    background-color: white;
    box-shadow: 2px 6px 9px rgba(0, 0, 0, 0.2);;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: row;
}
`;

const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;

a {
    margin: 0 1rem;
    text-decoration: none;
    color: black;

    &:hover {
        color: #1a73e8;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        text-align: center;
    }
}

    @media (min-width: 744px) {
        display: flex;
        justify-content: space-evenly;
        flex-grow: 2;
}
`;

const MenuIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
    
}
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <NavLogo />
            <MenuIcon onClick={toggleMenu}>
                <NavIcon src="/img/icons/Menu.svg" alt="Menu" />
            </MenuIcon>
            <NavLinksContainer isOpen={isOpen}>
                <NavLinks />
            </NavLinksContainer>
            <NavIconsContainer>
                <NavIcon src="img/icons/Search.svg" alt="Search" />
                <NavIcon src="img/icons/Help.svg" alt="Help" />
                <NavIcon src="img/icons/Cart.svg" alt="Cart" />
                <NavIcon src="img/icons/Avatar.svg" alt="Avatar" />
            </NavIconsContainer>
        </NavbarContainer>
    );
};
export default Navbar;
