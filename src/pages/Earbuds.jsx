import { useState } from 'react';
import styled from 'styled-components';

const EarbudsContainer = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EarbudsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const MainImageContainer = styled.div`
  background-color: var(--col-bg-accent, #f8f9fa);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const EarbudsImage = styled.img`
  width: 200px;
  height: auto;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ColorButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid #007bff;
  }
`;

const PriceContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Earbuds = () => {
  const [selectedColor, setSelectedColor] = useState('earbuds_01');
  const colors = {
    earbuds_01: '/img/earbuds/earbuds_01.png',
    earbuds_02: '/img/earbuds/earbuds_02.png',
    earbuds_03: '/img/earbuds/earbuds_03.png',
    earbuds_04: '/img/earbuds/earbuds_04.png',
  };

  const colorOptions = {
    earbuds_01: '#ADD8E6', // Light Blue
    earbuds_02: '#000000', // Black
    earbuds_03: '#808080', // Grey
    earbuds_04: '#FFA07A', // Light Salmon
  };

  return (
    <EarbudsContainer>
      <EarbudsTitle>Google Pixel Buds Pro</EarbudsTitle>
      <MainImageContainer className="main-image">
        <EarbudsImage src={colors[selectedColor]} alt="Earbuds" />
      </MainImageContainer>
      <ColorOptions>
        {Object.keys(colors).map(color => (
          <ColorButton 
            key={color} 
            color={colorOptions[color]}
            onClick={() => setSelectedColor(color)} />
        ))}
      </ColorOptions>
      <PriceContainer>229 €</PriceContainer>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </EarbudsContainer>
  );
};

export default Earbuds;
