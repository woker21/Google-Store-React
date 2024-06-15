import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.img`
    width: 1.188rem;
    margin-left: 1rem;
    cursor: pointer;

    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    gap: 1.5rem;

    @media (max-width: 768px) {
        margin: 1rem 0;
        gap: 1rem;
        flex-grow: 3;
    }
`;

const NavIcon = ({ src, alt }) => <Icon src={src} alt={alt} />;

NavIcon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default NavIcon;
