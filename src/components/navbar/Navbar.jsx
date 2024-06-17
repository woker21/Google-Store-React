import { useState } from 'react';
import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";
import NavLinks from "./NavLinks";

const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: white;
    box-shadow: 2px 6px 9px rgba(0, 0, 0, 0.2);
    padding-inline: 1rem;
`;

const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;


    @media (min-width: 768px) {
        gap: 1rem;
    }

    @media (min-width: 1024px) {
        gap: 0.5rem;
    }
`;

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    gap: 2rem;
    margin-right: 30rem;

    a {
        margin: 0 1rem;
        text-decoration: none;
        color: #353a49;
        font-size: 0.75rem;
        font-weight: 400;

        &:hover {
            color: #1a73e8;
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        width: 100%;
        text-align: center;
    }

`;


const MenuIcon = styled.div`
    display: block;
    cursor: pointer;
    margin-left: auto;
    gap: 1rem;

    @media (min-width: 768px) {
        display: none;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
            </MenuIcon>
            <NavLinksContainer isOpen={isOpen}>
                <NavLinks />
            </NavLinksContainer>
            <NavIconsContainer>
                <NavIcon src="img/icons/Search.svg" alt="Search" />
                <NavIcon src="img/icons/Help.svg" alt="Help" />
                <NavIcon src="img/icons/Cart.svg" alt="Cart" />
                <NavIcon src="img/icons/Avatar.svg" alt="Avatar" />
                <NavIcon src="/img/icons/Menu.svg" alt="Menu" />
            </NavIconsContainer>
        </NavbarContainer>
    );
};

export default Navbar;
