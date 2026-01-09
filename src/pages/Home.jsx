import React from 'react'
import { Link } from 'react-router-dom'
import { cakeProducts } from '../components/Products'
import hotDealsPhoto from '../assets/hotDealsPhoto.png'
import cslice from '../assets/sectslice.png'
import { NavLink } from 'react-router-dom'

// --- Responsive Styles for Mobile ---
const sectionContainerStyle = { 
  display: 'flex', 
  flexWrap: 'wrap', // This allows the text to drop below the image on mobile
  gap: '40px',
  alignItems: 'center', 
  justifyContent: 'center',
  padding: '40px 5%', 
  minHeight: 'auto'
};

const imageWrapperStyle = { 
  flex: '1 1 300px', // Shrinks but won't go smaller than 300px before wrapping
  display: 'flex', 
  justifyContent: 'center' 
};

const textWrapperStyle = { 
  flex: '1 1 300px', 
  textAlign: 'center', // Centers text on mobile
  minWidth: '300px'
};

const cardStyle = {
  backgroundColor: '#FFF8E7',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
  height: '100%'
};

function Home() {
  return (
    <div>
      {/* --- Section 1: Hot Deals --- */}
      <div style={sectionContainerStyle}>
        <div style={imageWrapperStyle}>
          <img 
            src={hotDealsPhoto} 
            alt="Cake image" 
            style={{ width: '100%', maxWidth: '450px', borderRadius: '20px' }} 
          />
        </div>
        <div style={textWrapperStyle}>
          <h1 style={{ color: '#5C3D2E', fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '10px' }}>
            Delicious Hot Deals!
          </h1>
          <p style={{ color: '#5C3D2E', fontSize: '1.1rem', marginBottom: '20px' }}>
            Freshly baked treats waiting for you. Get 20% off on all custom cakes this week.
          </p>
          <NavLink to="/CustomOrder"><button className='btn2'>Order Now!!!</button></NavLink>
        </div>
      </div>

      {/* --- Best Sellers Section --- */}
      <section style={{ padding: '40px 5%', backgroundColor: '#fffdfb25' }}>
        <h2 style={{ color: '#5C3D2E', fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>
          Best Sellers
        </h2>

        <div style={{ 
          display: 'grid', 
          // MAGIC LINE: Switches from 1 to 3 columns automatically
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px' 
        }}>
          {cakeProducts.map((cake) => (
            <Link key={cake.id} to={`/product/${cake.id}`} style={{ textDecoration: 'none' }}>
              <div style={cardStyle} className='cakecat'>
                <img src={cake.img} alt={cake.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ backgroundColor: '#D8C3A5', padding: '15px', color: '#5C4033' }}>
                  <p style={{ margin: 0, fontWeight: '500' }}>{cake.name}</p>
                  <p style={{ margin: '5px 0 0', fontWeight: 'bold' }}>{cake.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- Section 2: Buy One Get One --- */}
      <div style={{ ...sectionContainerStyle, flexDirection: 'row-reverse' }}>
        <div style={imageWrapperStyle}>
          <img 
            src={cslice} 
            alt="Cake slice" 
            style={{ width: '100%', maxWidth: '450px', borderRadius: '20px' }} 
          />
        </div>
        <div style={textWrapperStyle}>
          <h1 style={{ color: '#5C3D2E', fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '10px' }}>
            Buy one get one free!
          </h1>
          <p style={{ color: '#5C3D2E', fontSize: '1.2rem', marginBottom: '20px' }}>
            For only ₦ 10,000 
          </p>
          <button className='btn2'>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;