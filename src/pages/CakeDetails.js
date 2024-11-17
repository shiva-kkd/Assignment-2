// src/pages/CakeDetails.js
import React, { useState } from 'react';
import chocolate from '../assets/chocolate.jpg';
import '../styles/CakeDetails.css';

function CakeDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className="cake-details">
      <h2>Chocolate Cake</h2>
      <img src={chocolate} alt="Chocolate Cake" />
      <p>Description: A rich and moist chocolate cake.</p>
      <p>Price: $15.00</p>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default CakeDetails;
