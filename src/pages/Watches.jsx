import { useState } from 'react';
import styled from 'styled-components';

const WatchesContainer = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WatchesTitle = styled.h1`
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

const WatchesImage = styled.img`
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

const colorOptions = {
  watches_01: { color: 'black', label: 'Midnight Zen' },
  watches_02: { color: 'pink', label: 'Lilac Bliss' },
  watches_03: { color: 'yellow', label: 'Morning Glow' },
};

const Watches = () => {
  const [selectedColor, setSelectedColor] = useState('watches_01');
  const colors = {
    watches_01: '/img/smartwatch_black.png',
    watches_02: '/img/smartwatch_pink.png',
    watches_03: '/img/smartwatch_yellow.png',
  };

  return (
    <WatchesContainer>
      <WatchesTitle>Fitbit Inspire 3</WatchesTitle>
      <MainImageContainer>
        <WatchesImage src={colors[selectedColor]} alt="Watches" />
      </MainImageContainer>
      <ColorOptions>
        {Object.keys(colors).map(color => (
          <div key={color}>
            <ColorButton
              color={colorOptions[color].color}
              onClick={() => setSelectedColor(color)}
            />
            <p>{colorOptions[color].label}</p>
          </div>
        ))}
      </ColorOptions>
      <PriceContainer>99,95 €</PriceContainer>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </WatchesContainer>
  );
};

export default Watches;
