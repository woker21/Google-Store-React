
import styled from "styled-components"

const ProdTitleCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ProductName  = styled.h1`
    font-size: 35px;
    font-weight: bold;
    margin: 0;
  `;

const ProductCategory = styled.h3`
  font-size: 12px;
  font-style: normal;
  `;

const ProductPrice = styled.h2`
    font-size: 20px;
    font-weight: bold;
    `;


const ProdTitle = () => {
  return (
    <ProdTitleCard>
      <ProductName>Google Pixel Buds Pro</ProductName>
      <ProductCategory>Music & Sound</ProductCategory>
      <ProductPrice>229,00 €</ProductPrice>
    </ProdTitleCard>
  )
}

export {ProdTitle};