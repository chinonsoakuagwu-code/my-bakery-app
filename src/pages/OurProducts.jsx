import React from 'react';
import { allProducts } from '../components/Products';

function OurProducts({ addToCart }) {
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
                  <p style={{ margin: 0, fontWeight: '500', fontSize: '0.9rem' }}>{product.name}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem' }}>{product.price}</p>
                </div>
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
    <div style={{ minHeight: '100vh', padding: '40px 5%',}}>
      <h1 style={menuTitleStyle}>Menu</h1>
      {renderCategory("Freshly Baked Pastries", "pastries")}
      {renderCategory("Sweet Treats and Snacks", "snacks")}
    </div>
  );
}

// --- UPDATED STYLES FOR MOBILE RESPONSIVENESS ---
const menuTitleStyle = { 
  color: '#5C3D2E', 
  fontFamily: 'serif', 
  textAlign: 'center', 
  fontSize: 'clamp(2rem, 8vw, 3rem)', // Shrinks on small screens
  marginBottom: '40px' 
};

const categoryHeaderStyle = { 
  color: '#5C3D2E', 
  fontFamily: 'serif', 
  fontSize: 'clamp(1.5rem, 5vw, 2rem)', 
  marginBottom: '20px' 
};

const menuGridStyle = { 
  display: 'grid', 
  // This line automatically switches from 1 column to 4 columns depending on screen size
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
  gap: '20px',
  justifyContent: 'center'
};

const menuCardStyle = { 
  backgroundColor: '#fff', 
  borderRadius: '15px', 
  overflow: 'hidden', 
  boxShadow: '0 8px 15px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column'
};

const menuImageStyle = { 
  width: '100%', 
  aspectRatio: '1/1', // Keeps images square and prevents stretching
  objectFit: 'cover' 
};

const menuLabelStyle = { 
  backgroundColor: '#D8C3A5', 
  padding: '12px', 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  color: '#5C4033',
  flexGrow: 1 
};

const addBtnStyle = { 
  backgroundColor: '#5C4033', 
  color: 'white', 
  border: 'none', 
  borderRadius: '50%', 
  width: '35px', // Slightly larger for easier tapping on mobile
  height: '35px', 
  cursor: 'pointer', 
  fontSize: '1.2rem',
  flexShrink: 0
};

export default OurProducts;