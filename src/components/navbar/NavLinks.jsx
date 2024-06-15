import styled from 'styled-components';


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

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        text-align: center;

        a {
            margin: 1rem 0;
        }
    }
`;

const NavLinks = ({ isOpen }) => (
    <NavLinksContainer isOpen={isOpen}>
        <a href="/phones">Phones</a>
        <a href="/earbuds">Earbuds</a>
        <a href="/watches">Watches</a>
        <a href="/smarthome">Smart Home</a>
        <a href="/accessories">Accessories</a>
        <a href="/subscriptions">Subscriptions</a>
    </NavLinksContainer>
);

export default NavLinks;
