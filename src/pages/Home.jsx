import React from 'react'
import { Link } from 'react-router-dom'
import { cakeProducts } from '../components/Products'
import hotDealsPhoto from '../assets/hotDealsPhoto.png'
import cake1 from '../assets/Cake1.png'
import cake2 from '../assets/Cake 2.png'
import cake3 from '../assets/Cake 3.png'
import cake4 from '../assets/Cake 4.png'
import cake5 from '../assets/Cake 5.png'
import cake6 from '../assets/Cake 6.png'
import cslice from '../assets/sectslice.png'

const cardStyle = {
  backgroundColor: '#FFF8E7',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)', // Soft shadow from your image
  textAlign: 'center'
};

const imageStyle = {
  width: '100%',
  height: '250px',
  objectFit: 'cover'
};

const labelStyle = {
  backgroundColor: '#D8C3A5', // That tan/brown color under your cakes
  padding: '15px',
  color: '#5C4033'
};

const nameStyle = { margin: 0, fontWeight: '500' };
const priceStyle = { margin: '5px 0 0', fontWeight: 'bold' };

function Home() {
  return (
    <div>
      <div style={{ 
      display: 'flex', 
      gap: '80px',
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '50px 10%', 
      minHeight: '60vh'
    }}>

        {/* left Side: Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img 
              src={hotDealsPhoto} 
              alt="Cake image" 
              style={{ 
                  width: '100%', 
                  maxWidth: '500px', 
                  borderRadius: '20px',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)', 
              }} 
            />
        </div>

            {/* Right Side: Text and CTA */}
            <div style={{ flex: 1 }}>
                <h1 style={{ color: '#5C3D2E', fontSize: '3rem', marginBottom: '10px' }}>
                Delicious Hot Deals!
                </h1>
                <p style={{ color: '#5C3D2E', fontSize: '1.2rem', marginBottom: '20px' }}>
                Freshly baked treats waiting for you. Get 20% off on all custom cakes this week.
                </p>
                <button className='btn2'>
                Order Now!!!
                </button>
            </div>
    </div>


{/* Best Sellers Section */}
<section style={{ padding: '40px 10%', backgroundColor: '#fffdfb25' }}>
  <h2 style={{ color: '#5C3D2E', fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '30px' }}>
    Best Sellers
  </h2>

  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '40px' 
  }}>
    {/* This map replaces all those manual card divs */}
    {cakeProducts.map((cake) => (
      <Link key={cake.id} to={`/product/${cake.id}`} style={{ textDecoration: 'none' }}>
        <div style={cardStyle} className='cakecat'>
          <img src={cake.img} alt={cake.name} style={imageStyle} />
          <div style={labelStyle}>
            <p style={nameStyle}>{cake.name}</p>
            <p style={priceStyle}>{cake.price}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

      <div style={{ 
      display: 'flex', 
      gap: '80px',
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '50px 10%', 
      minHeight: '60vh'
    }}>

        {/* left Side: Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img 
              src={cslice} 
              alt="Cake image" 
              style={{ 
                  width: '100%', 
                  maxWidth: '500px', 
                  borderRadius: '20px',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)', 
              }} 
            />
        </div>

            {/* Right Side: Text and CTA */}
            <div style={{ flex: 1 }}>
                <h1 style={{ color: '#5C3D2E', fontSize: '3rem', marginBottom: '10px' }}>
                Buy one get one free!
                </h1>
                <p style={{ color: '#5C3D2E', fontSize: '1.2rem', marginBottom: '20px' }}>
                For only ₦ 10,000 
                </p>
                <button className='btn2'>
                Order Now
                </button>
            </div>
    </div>

    </div>
  )
}

export default Home;