import React from 'react';
import { Instagram, Facebook, Twitter, Phone } from 'lucide-react';

function EndBar() {
  return (
    <footer className="footer-bar">
      <div className="footer-content container">
        
        <div className="footer-section">
          <h3>Chevz Delite</h3>
          <p>Let's Delite Your taste buds.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <Phone size={18} color="#FFD524" />
            <a href="tel:+2348033117480">+234 80 331 174 80</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={24} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter size={24} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chevz Delite Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default EndBar;