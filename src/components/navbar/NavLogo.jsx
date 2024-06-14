import styled from 'styled-components';

const Logo = styled.img`
  width: 33px;
  height: 33px;
`;

const NavLogo = () => (
  <a href="/">
    <Logo src="/assets/img/google-logo.png" alt="Google" />
  </a>
);

export default NavLogo;
