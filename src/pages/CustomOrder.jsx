import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomOrder() {
  const navigate = useNavigate();

  const sub = () => {
    alert("Your order has been submitted! Contact '08033117480' on WhatsApp to follow up.");
    console.log("Order Data:", formData);
  };


  return (
    <div style={pageWrapper}>
      {/* Back Button */}
      <button onClick={() => navigate(-1)} style={backArrowStyle}>‹</button>

      <h1 style={headerStyle}>Custom Order Your Dream Cake</h1>
      
      <div style={responsiveMainContainer}>
        <div style={formCard}>
          <p style={subHeader}>Cake Details</p>
          
          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Cake Type/Shape:</label>
            <select name="shape" style={selectStyle} >
              <option value="">Select Shape</option>
              <option value="round">Round</option>
              <option value="square">Square</option>
              <option value="heart">Heart</option>
              <option value="custom">Custom Shape</option>
            </select>
          </div>

          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Size:</label>
            <select name="layers" style={selectStyle} >
              <option value="">Select Size</option>
              <option value="small">6-inch (small)</option>
              <option value="medium">8-inch (Medium)</option>
              <option value="large">10-inch (Large)</option>
              <option value="xtralarge">12-inch (Xtra Large)</option>
            </select>
          </div>

          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Layers:</label>
            <select name="layers" style={selectStyle} >
              <option value="">Select Layers</option>
              <option value="small">1</option>
              <option value="medium">2</option>
              <option value="large">3</option>
            </select>
          </div>



          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Flavour:</label>
            <select name="flavour" style={selectStyle}>
              <option value="">Select Flavour</option>
              <option value="chocolate">Chocolate</option>
              <option value="vanilla">Vanilla</option>
              <option value="red-velvet">Red Velvet</option>
              <option value="strawberry">Strawberry</option>
              <option value="fruit">Fruit</option>
            </select>
          </div>

          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Frosting:</label>
            <select name="frosting" style={selectStyle}>
              <option value="whippedcream">Whipped Cream</option>
              <option value="buttericing">Butter Icing</option>
              <option value="Fondant">Fondant</option>
            </select>
          </div>

          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Contact Phone No:</label>
            <input name="phone" style={inputStyle} placeholder="080..." />
          </div>

          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Message on Cake:</label>
            <textarea name="message" style={textAreaStyle} placeholder="Happy Birthday..." />
          </div>

          <div style={responsiveInputGroup}>
            <label style={labelStyle}>Allergies/Special Instructions:</label>
            <textarea name="instructions" style={textAreaStyle} placeholder="No nuts please..." />
          </div>
          
          <button type='button' style={submitBtn} onClick={sub}>Submit Order</button>
          <p style={footerNote}>Follow Up via Whatsapp: 08033117480</p>
        </div>
      </div>
    </div>
  );
}

// --- UPDATED RESPONSIVE STYLES ---
const pageWrapper = { 
  backgroundColor: '#FFFDFB', 
  minHeight: '100vh', 
  padding: '20px 5%',
  display: 'flex',
  flexDirection: 'column'
};

const headerStyle = { 
  color: '#4B2C5E', 
  fontFamily: 'serif', 
  fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
  marginBottom: '20px',
  textAlign: 'center' 
};

// This uses flexWrap to stack on mobile
const responsiveMainContainer = { 
  display: 'flex', 
  flexWrap: 'wrap', 
  gap: '20px', 
  justifyContent: 'center' 
};

const formCard = { 
  flex: '1 1 500px', // Shrinks but grows, max width logic
  maxWidth: '700px',
  backgroundColor: '#F5E6D3', 
  padding: 'clamp(15px, 4vw, 30px)', 
  borderRadius: '20px', 
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)' 
};

// Input group now stacks vertically on small screens
const responsiveInputGroup = { 
  display: 'flex', 
  flexDirection: window.innerWidth < 600 ? 'column' : 'row', // Quick responsive check
  alignItems: window.innerWidth < 600 ? 'flex-start' : 'center', 
  marginBottom: '20px', 
  gap: '10px' 
};

const labelStyle = { flex: 1, color: '#5C3D2E', fontWeight: 'bold', marginBottom: '5px' };
const inputStyle = { width: '100%', flex: 2, padding: '12px', border: 'none', borderRadius: '20px', backgroundColor: '#E0C9B0', outline: 'none' };
const selectStyle = { ...inputStyle, cursor: 'pointer' };
const textAreaStyle = { ...inputStyle, borderRadius: '10px', height: '80px', resize: 'none' };
const submitBtn = { backgroundColor: '#4B2C5E', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', fontSize: '1.2rem', cursor: 'pointer', width: '100%', marginTop: '10px' };
const backArrowStyle = { width: '40px', backgroundColor: '#4B2C5E', color: 'white', border: 'none', padding: '5px', fontSize: '1.5rem', borderRadius: '5px', cursor: 'pointer', marginBottom: '10px' };
const subHeader = { fontSize: '1.5rem', color: '#5C3D2E', marginBottom: '20px', fontWeight: 'bold' };
const footerNote = { fontSize: '0.9rem', textAlign: 'center', marginTop: '15px', color: '#5C3D2E' };

export default CustomOrder;