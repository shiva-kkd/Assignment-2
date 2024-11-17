// src/pages/CakeCategories.js
import React from 'react';
import chocolate from '../assets/chocolate.jpg';
import fruit from '../assets/fruit.jpg';
import custom from '../assets/custom.jpg';
import '../styles/CakeCategories.css';

function CakeCategories() {
  const categories = [
    { name: 'Chocolate Cakes', image: chocolate },
    { name: 'Fruit Cakes', image: fruit },
    { name: 'Custom Cakes', image: custom },
  ];

  return (
    <div className="categories">
      <h2>Explore Our Cake Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.name}</h3>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeCategories;
