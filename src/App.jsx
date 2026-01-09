import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './styles.css' 
import CustomOrder from './pages/CustomOrder'
import OurProducts from './pages/OurProducts'
import Cart from './pages/Cart'
import ProductDisplay from './components/ProductDisplay'
import { useState } from 'react'

function App() {
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/OurProducts" element={<OurProducts addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cart} />} />
        <Route path='/CustomOrder' element={<CustomOrder />}/>
        <Route path="/product/:productId" element={<ProductDisplay addToCart={addToCart} />} />

        <Route path="/product/:productId" element={<ProductDisplay />} />
      </Routes>

    </>
  )
}

export default App