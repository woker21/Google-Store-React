import React, { useState } from 'react';
import styles from './Earbuds.module.scss';

const Earbuds = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const colors = {
    black: '/assets/img/earbuds/earbuds_black.png',
    white: '/assets/img/earbuds/earbuds_white.png',
    pink: '/assets/img/earbuds/earbuds_pink.png'
  };

  return (
    <div className={styles.earbudsPage}>
      <h1>Google Pixel Buds Pro</h1>
      <img src={colors[selectedColor]} alt="Earbuds" />
      <div className={styles.colorOptions}>
        {Object.keys(colors).map(color => (
          <button
            key={color}
            className={selectedColor === color ? styles.active : ''}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  );
};

export default Earbuds;
