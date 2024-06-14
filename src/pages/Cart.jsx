
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartItemName = styled.span`
  font-size: 1.2rem;
`;

const CartItemPrice = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Google Pixel Buds Pro', price: '229,00 €' },
    { id: 2, name: 'Fitbit Inspire 3', price: '99,95 €' },
  ];

  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <CartItemName>{item.name}</CartItemName>
          <CartItemPrice>{item.price}</CartItemPrice>
        </CartItem>
      ))}
    </CartContainer>
  );
};

export default Cart;
