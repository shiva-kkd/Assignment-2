// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import CakeCategories from './pages/CakeCategories';
import CakeDetails from './pages/CakeDetails';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Footer /> {/* Footer now acts as a header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CakeCategories />} />
          <Route path="/details/:id" element={<CakeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
