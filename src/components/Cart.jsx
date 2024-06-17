import styled from "styled-components";

const TitleCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

const Title  = styled.h1`
    font-size: 35px;
    font-weight: bold;
    margin: 0;
`;

const ItemNum = styled.h2`
    font-size: 20px;
    font-style: bold;
    margin: 0;
`;

const CartTitle = () => {
    return(
    <>
    
    <TitleCart>
        <Title>Cart</Title>
        <ItemNum>(3 items)</ItemNum>
    </TitleCart>
    
    </>
    )
};

export { CartTitle };

