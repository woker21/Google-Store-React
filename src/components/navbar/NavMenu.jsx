import styled from 'styled-components';
import NavIcon from './NavIcon';

const MenuIcon = styled(NavIcon)`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = () => {
  return (
    <div>
      <NavLinks>
        <a href="/phones">Phones</a>
        <a href="/earbuds">Earbuds</a>
        <a href="/watches">Watches</a>
        <a href="/smarthome">Smart Home</a>
        <a href="/accessories">Accessories</a>
        <a href="/subscriptions">Subscriptions</a>
      </NavLinks>
      <MenuIcon src="/assets/img/icons/Menu.svg" alt="Menu" />
    </div>
  );
};

export default NavMenu;
