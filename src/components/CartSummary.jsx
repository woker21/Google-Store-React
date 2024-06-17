import styled from "styled-components";

const Summary = styled.section`
    width: 100%;
    display: grid;
    place-content: center;
    background-color: #c5daee;
    border-radius: 40px;
    margin: 20px;
    padding: 20px 20px;
`;
const CartSubTotal = styled.article`
    display: grid;
    grid-template-column: 2;
    grid-template-rows: 3;
    padding: 20px;
`;
const TitSubtotal = styled.h3`
    grid-row: 1;
    grid-column: 1;
    justify-self: start;
`;
const Subtotal = styled.h3`
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
`;
const TitShipping = styled.h3`
    grid-row: 2;
    grid-column: 1;
    justify-self: start;
`;
const Shipping = styled.h3`
    grid-row: 2;
    grid-column: 2;
    justify-self: end;
`;
const TitVAT = styled.h3`
    grid-row: 3;
    grid-column: 1;
    justify-self: start;
`;
const VAT = styled.h3`
    grid-row: 3;
    grid-column: 2;
    justify-self: end;
`;
const CartTotal = styled.article`
    display: grid;
    grid-template-column: 2;
    grid-template-rows: 3;
    padding: 20px;
`;
const Item = styled.h3`
    font-size: 12px;
    font-style: bold;
    justify-self: start;
    margin: 0;
`;
const Total = styled.h3`
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    margin: 0;
`;
const  Credit = styled.p`
    grid-column: 2;
    font-family: Inter;
    color: #353a49;
    justify-self: end;
    font-size: 8px;
    padding: 0;
    margin: 0;
`;
const TextButton = styled.a`
    color: #ffffff;
    font-family: Inter;
`;
const Button = styled.button`
    width: 278px;
    height: 52px;
    text-decoration-line: none;
    background: #1a73e8;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 5px;
    font-family: Inter;
    font: 12px bold;
    border:0;
    color: #ffffff;
`;

const CartSummary = () => {
    return(
    <>
    <Summary>
        <h2>Order Summary</h2>
        <CartSubTotal>
            <TitSubtotal><Item>Subtotal</Item></TitSubtotal>
            <Subtotal><Item>€ 428.90</Item></Subtotal>
            <TitShipping><Item>Shipping costs</Item></TitShipping>
            <Shipping><Item>€ 4.90</Item></Shipping>
            <TitVAT><Item>estimated VAT</Item></TitVAT>
            <VAT><Item>Including</Item></VAT>
        </CartSubTotal>
        <hr/>
        <CartTotal>
            <Item>Total estimated</Item>
            <Total><Item>€ 433.80</Item></Total>
            <Credit>or €144.60/month</Credit>
            <Credit>with 3 monthly installments *</Credit>
        </CartTotal>
        <Button>
            <TextButton href="">Complete the purchase</TextButton>
        </Button>
    </Summary>
    </>
    )
};

export { CartSummary };

