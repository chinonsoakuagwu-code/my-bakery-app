import React from 'react';
import { allProducts } from '../components/Products';

function OurProducts({ addToCart }) {
  // Helper function to render a category section
  const renderCategory = (title, categoryName) => (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={categoryHeaderStyle}>{title}</h2>
      <div style={menuGridStyle}>
        {allProducts
          .filter(item => item.category === categoryName)
          .map(product => (
            <div className='cakecat' key={product.id} style={menuCardStyle}>
              <img src={product.img} alt={product.name} style={menuImageStyle} />
              <div style={menuLabelStyle}>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ margin: 0, fontWeight: '500' }}>{product.name}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem' }}>{product.price}</p>
                </div>
                {/* The (+) Add Button from your design */}
          <button 
          style={addBtnStyle} 
          onClick={() => addToCart(product)}>+</button>              
          
          </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', padding: '40px 10%' }}>
      <h1 style={menuTitleStyle}>Menu</h1>
      <button onClick={() => addToCart(product)} style={addBtnStyle}>+</button>
      {renderCategory("Freshly Baked Pastries", "pastries")}
      {renderCategory("Sweet Treats and Snacks", "snacks")}
    </div>
  );
}

// STYLES
const menuTitleStyle = { color: '#5C3D2E', fontFamily: 'serif', textAlign: 'center', fontSize: '3rem', marginBottom: '40px' };
const categoryHeaderStyle = { color: '#5C3D2E', fontFamily: 'serif', fontSize: '2rem', marginBottom: '20px' };
const menuGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' };
const menuCardStyle = { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.05)' };
const menuImageStyle = { width: '100%', height: '200px', objectFit: 'cover' };
const menuLabelStyle = { backgroundColor: '#D8C3A5', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#5C4033' };
const addBtnStyle = { backgroundColor: '#5C4033', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', fontSize: '1.2rem' };

export default OurProducts;