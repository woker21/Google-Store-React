
import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";

const NavbarContainer = styled.nav`
    display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding-inline: 1rem;
  background-color: white;
  box-shadow: 2px 6px 9px rgba(0, 0, 0, 0.2);
`;

const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
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
        <NavIcon src="/public/img/icons/Search.svg" alt="Search" />
        <NavIcon src="/public/img/icons/Help.svg" alt="Help" />
        <NavIcon src="/public/img/icons/Cart.svg" alt="Cart" />
        <NavIcon src="/public/img/icons/Avatar.svg" alt="Avatar" />
        <NavIcon src="/public/img/icons/Menu.svg" alt="Menu" />
    </NavIconsContainer>
    </NavbarContainer>
);

export default Navbar;
