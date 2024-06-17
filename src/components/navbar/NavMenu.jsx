import styled from 'styled-components';
import NavIcon from './NavIcon';

const MenuIcon = styled(NavIcon)`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;


const NavMenu = () => {
  return (
    <div>
      <MenuIcon src="/img/icons/Menu.svg" alt="Menu" />
    </div>
  );
};

export default NavMenu;
