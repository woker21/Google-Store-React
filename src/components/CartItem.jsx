import styled from "styled-components";

const Items = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: #c5daee;
    border-radius: 40px;
    width: 100%;
    margin: 20px;
    padding: 20px 20px;
`;
const Photo = styled.img`
    grid-column: 1;
    grid-row: 1 / 4;
    width: 100%;
    justify-items: center;
    align-items: center;
    place-content: center;
`;
const Item = styled.h3`
    font-size: 12px;
    font-style: bold;
    justify-self: start;    
    margin: 0;
`;
const Cant = styled.h3`
    grid-column: 2;
    grid-row: 2;
    justify-self: start;
`;
const Price = styled.h3`
    grid-row: 2;
    grid-column: 3;
    justify-self: end;
`;
const Delete = styled.a`
    grid-column: 3;
    grid-row: 3;
    color: #1a73e8;
`;
const Delivery = styled.div`
    grid-column: 1 / 4;
    grid-row: 4;
    align-items: center;
    background-color: #ffffff;
    font-family: Inter;
    border-radius: 5px;
    margin: 20px 0px;
    padding: 10px;
    gap: 10px;
    display: flex;
    justify-content: start;
`;

const CartItem = () => {
    return(
    <>
    
    <Items className="items">
        <Photo src="../../public/img/earbuds/earbuds_01.png" width={200} />
        <Item>Google Pixel Buds Pro</Item>
        <Cant><Item>Cant: </Item></Cant>  {/*<input type="number" min="1">*/}
        <Price><Item>229 €</Item></Price>
        <Delete href="">Remove</Delete>
        <Delivery>
            <img src="../../public/img/icons/Delivery.svg" alt="Delivery" width={30} />
            <Item>Delivers 29 Apr to <span>08023</span></Item>
        </Delivery>
    </Items>
    
    </>
    )
};

export { CartItem };

