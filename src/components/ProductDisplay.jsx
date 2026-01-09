import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { cakeProducts } from '../components/Products';

function ProductDisplay( {addToCart}    ) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const cake = cakeProducts.find(item => item.id === productId);

  if (!cake) return <div>Cake not found!</div>;

  return (
    <div style={{ backgroundColor: '#FFF8E7', minHeight: '100vh', padding: '50px' }}>
        
      <Link to="/" style={{ color: '#55185D', fontSize: '4rem' }}>‹</Link>
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <img src={cake.img} alt={cake.name} style={{ width: '100%', borderRadius: '20px' }} />
        <h1 style={{ color: '#5C3D2E', fontFamily: 'serif', fontSize: '3.5rem' }}>{cake.name}</h1>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{cake.price}</p>
        
        <button className='btn2' onClick={() => addToCart(cake)}>
       Add To Cart
    </button>
        
        <div style={{ marginTop: '40px', fontSize: '0.9rem', lineHeight: '1.6' }}>
          <p>Ingredients (for Allergy Check)</p>
          <p>{cake.ingredients}</p>
          <p style={{ fontWeight: 'bold' }}>Allergen Info: {cake.allergenInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;