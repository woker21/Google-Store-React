import styled from 'styled-components';

const Logo = styled.img`
  grid-column-start: 2;
  width: 2rem;
  height: 2rem;
  margin-top: 5px;
`;

const NavLogo = () => (
  <a href="/">
    <Logo src="/img/google-logo.png" alt="Google" />
  </a>
);

export default NavLogo;
