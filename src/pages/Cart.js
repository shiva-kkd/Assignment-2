// src/pages/Cart.js
import React, { useState } from 'react';
import '../styles/Cart.css';

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Chocolate Cake", price: 1500.0, quantity: 1 },
    { id: 2, name: "Fruit Cake", price: 1200.0, quantity: 2 },
  ]);

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>₹{item.price.toFixed(2)}</span>
          <span>Quantity: {item.quantity}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <button className="checkout">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
