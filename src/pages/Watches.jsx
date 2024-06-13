// src/pages/Watches.jsx


import styles from './Watches.module.scss';

const Watches = () => {
    const [selectedColor, setSelectedColor] = useState('midnightZen');
    const colors = {
        midnightZen: '/assets/img/watches/smartwatch_black.png',
        lilacBliss: '/assets/img/watches/smartwatch_pink.png',
        morningGlow: '/assets/img/watches/smartwatch_yellow.png',
    };

    return (
        <div className={styles.watchesPage}>
            <h1>Fitbit Inspire 3</h1>
            <img src={colors[selectedColor]} alt="Watch" />
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

export default Watches;
