import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function sub(a){
  alert("Your order has been submitted, Contact '08033117480' on whatsapp to follow up")
}

function CustomOrder() {
  const navigate = useNavigate();

const selectStyle = {
  flex: 2,
  padding: '12px 15px',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#E0C9B0', // Matches your Figma input color
  color: '#5C3D2E',
  fontSize: '1rem',
  cursor: 'pointer',
  appearance: 'none', // This removes the default browser arrow
  outline: 'none'
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: '#FFFDFB', minHeight: '100vh', padding: '40px 5%' }}>
      {/* Back Button */}
      <button onClick={() => navigate(-1)} style={backArrowStyle}>‹</button>

      <h1 style={headerStyle}>Custom Order Your Dream Cake</h1>
      
      <div style={mainContainer}>
        {/* Left Side: The Form */}
        <div style={formCard}>
          <p style={subHeader}>Cake Details</p>
          
          <div style={inputGroup}>
            <label style={labelStyle}>Cake Type/Shape:</label>
            <select name="shape" style={selectStyle} onChange={handleChange}>
              <option value="">Select Shape</option>
              <option value="round">Round</option>
              <option value="square">Square</option>
              <option value="heart">Heart</option>
              <option value="custom">Custom Shape</option>
            </select>
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Size and Layers:</label>
            <select name="layers" style={selectStyle} onChange={handleChange}>
              <option value="">Select Size</option>
              <option value="small">6-inch (small)</option>
              <option value="medium">8-inch (Medium)</option>
              <option value="large">10-inch (Large)</option>
              <option value="xtralarge">12-inch (Xtra Large)</option>
            </select>
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Flavour:</label>
          <select name="flavour" style={selectStyle} onChange={handleChange}>
              <option value="">Select Flavour</option>
              <option value="chocolate">Chocolate</option>
              <option value="vanilla">Vanilla</option>
              <option value="red-velvet">Red Velvet</option>
              <option value="strawberry">Strawberry</option>
              <option value="fruit">Fruit</option>
          </select>
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Frosting:</label>
            <select name="frosting" style={inputStyle} onChange={handleChange}>
              <option value="whippedcream">Whipped Cream</option>
              <option value="buttericing">Butter Icing</option>
              <option value="Fondant">Fondant</option>
            </select>
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Contact Phone No:</label>
            <input name="phone" style={inputStyle} onChange={handleChange} />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Message on Cake:</label>
            <textarea name="message" style={textAreaStyle} onChange={handleChange} />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Allergies/Special Instructions:</label>
            <textarea name="instructions" style={textAreaStyle} onChange={handleChange} />
          </div>
          
          <div>
           <button type='submit' style={submitBtn} onClick={() => {sub()}}>Submit Order</button>
          </div>

          <p style={footerNote}>Follow Up with your order via Whatsapp on: 08033117480</p>

        </div>
        
      </div>
    </div>
  );
}

// STYLES
const backArrowStyle = { backgroundColor: '#4B2C5E', color: 'white', border: 'none', padding: '5px 15px', fontSize: '1.5rem', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' };
const headerStyle = { color: '#4B2C5E', fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '20px' };
const mainContainer = { display: 'flex', gap: '40px', alignItems: 'flex-start' };
const formCard = { flex: 2, backgroundColor: '#F5E6D3', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' };
const subHeader = { fontSize: '1.5rem', color: '#5C3D2E', marginBottom: '20px' };
const inputGroup = { display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '20px' };
const labelStyle = { flex: 1, color: '#5C3D2E', fontWeight: 'bold' };
const inputStyle = { flex: 2, padding: '12px', border: 'none', borderRadius: '20px', backgroundColor: '#E0C9B0' };
const textAreaStyle = { ...inputStyle, borderRadius: '10px', height: '60px' };
const submitBtn = { backgroundColor: '#4B2C5E', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '10px', fontSize: '1.2rem', cursor: 'pointer', width: '100%' };
const footerNote = { fontSize: '0.8rem', textAlign: 'center', marginTop: '10px', color: '#5C3D2E' };

export default CustomOrder;