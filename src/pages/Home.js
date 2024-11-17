// src/pages/Home.js
import React from 'react';
import featured1 from '../assets/featured1.jpg';
import featured2 from '../assets/featured2.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Cake Shop!</h1>
      <div className="featured-cakes">
        <img src={featured1} alt="Featured Cake 1" />
        <img src={featured2} alt="Featured Cake 2" />
      </div>
      <p>Discover our delicious and freshly baked cakes!</p>
    </div>
  );
}

export default Home;
