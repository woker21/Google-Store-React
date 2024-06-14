import React, { useState } from 'react';
import styled from 'styled-components';

const EarbudsContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const EarbudsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const EarbudsImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ColorButton = styled.button`
  padding: 0.5rem 1rem;
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
    earbuds_01: '/assets/img/earbuds/earbuds_01.png',
    earbuds_02: '/assets/img/earbuds/earbuds_02.png',
    earbuds_03: '/assets/img/earbuds/earbuds_03.png',
    earbuds_04: '/assets/img/earbuds/earbuds_04.png',
  };

  return (
    <EarbudsContainer>
      <EarbudsTitle>Google Pixel Buds Pro</EarbudsTitle>
      <EarbudsImage src={colors[selectedColor]} alt="Earbuds" />
      <ColorOptions>
        {Object.keys(colors).map(color => (
          <ColorButton key={color} onClick={() => setSelectedColor(color)}>
            {color.replace('earbuds_', 'Color ')}
          </ColorButton>
        ))}
      </ColorOptions>
    </EarbudsContainer>
  );
};

export default Earbuds;
