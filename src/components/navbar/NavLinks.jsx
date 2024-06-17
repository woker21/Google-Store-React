import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    margin: 0.8rem;

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

        &.active {
            color: #1a73e8;
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        text-align: center;
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        flex-grow: 2;
    }
`;

const NavLinks = ({ isOpen }) => {
    const getActiveClass = (path) => {
        return window.location.pathname === path ? 'active' : '';
    };

    return (
        <NavLinksContainer isOpen={isOpen}>
            <a href="/phones" className={getActiveClass('/phones')}>Phones</a>
            <a href="/earbuds" className={getActiveClass('/earbuds')}>Earbuds</a>
            <a href="/watches" className={getActiveClass('/watches')}>Watches</a>
            <a href="/smarthome" className={getActiveClass('/smarthome')}>Smart Home</a>
            <a href="/accessories" className={getActiveClass('/accessories')}>Accessories</a>
            <a href="/subscriptions" className={getActiveClass('/subscriptions')}>Subscriptions</a>
        </NavLinksContainer>
    );
};

NavLinks.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default NavLinks;
