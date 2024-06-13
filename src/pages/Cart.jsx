// src/pages/Watches.jsx

import styles from './Cart.module.scss';

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Google Pixel Buds Pro', price: 229, quantity: 1, image: '/assets/img/earbuds/earbuds_01.png' },
        { id: 2, name: 'Fitbit Inspire 3', price: 99.95, quantity: 2, image: '/assets/img/smartwatch/smartwatch_black.png' }
    ];

    const shippingCost = 4.90;
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const total = calculateSubtotal() + shippingCost;

    return (
        <div className={styles.cartPage}>
            <h1>Cart (3 items)</h1>
            <div className={styles.cartItems}>
                {cartItems.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.itemDetails}>
                            <p>{item.name}</p>
                            <p>Cant: {item.quantity}</p>
                            <p>€{item.price}</p>
                            <button>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.orderSummary}>
                <h2>Order Summary</h2>
                <p>Subtotal: €{calculateSubtotal().toFixed(2)}</p>
                <p>Shipping costs: €{shippingCost}</p>
                <p>Total estimated: €{total.toFixed(2)}</p>
                <button>Complete the purchase</button>
            </div>
        </div>
    );
};

export default Cart;
