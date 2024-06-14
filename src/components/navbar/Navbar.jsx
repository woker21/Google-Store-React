import { Link } from "react-router-dom";
import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;

a {
    margin: 0 1rem;
    text-decoration: none;
    color: black;

    &:hover {
        color: #1a73e8;
    }
}
`;

const Navbar = () => (
    <NavbarContainer>
    <NavLogo />
    <NavLinksContainer>
        <a href="/phones">Phones</a>
        <a href="/earbuds">Earbuds</a>
        <a href="/watches">Watches</a>
        <a href="/smarthome">Smart Home</a>
        <a href="/accessories">Accessories</a>
        <a href="/subscriptions">Subscriptions</a>
    </NavLinksContainer>
    <NavIconsContainer>
        <NavIcon src="/assets/img/icons/Search.svg" alt="Search" />
        <NavIcon src="/assets/img/icons/Help.svg" alt="Help" />
        <NavIcon src="/assets/img/icons/Cart.svg" alt="Cart" />
        <NavIcon src="/assets/img/icons/Avatar.svg" alt="Avatar" />
        <NavIcon src="/assets/img/icons/Menu.svg" alt="Menu" />
    </NavIconsContainer>
    </NavbarContainer>
);

export default Navbar;
