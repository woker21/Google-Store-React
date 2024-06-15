import styled from 'styled-components';



const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 0.75rem;
    margin-right: 30rem;
    gap: 2rem;

    a {
        margin: 0 1rem;
        text-decoration: none;
        color: #353a49;

        &:hover {
            color: #1a73e8;
            font-weight: 700;
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
