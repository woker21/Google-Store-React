import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.img`
    width: 1.188rem;
    margin-left: 1rem;
    cursor: pointer;
`;

const NavIcon = ({ src, alt }) => <Icon src={src} alt={alt} />;

NavIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default NavIcon;
