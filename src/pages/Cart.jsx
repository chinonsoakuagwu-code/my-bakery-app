import React from 'react';


function sub(a){
  alert("Your order has been submitted, Contact '08033117480' on whatsapp to follow up")
}

function Cart({ cartItems }) {
  // Calculate total price
  const total = cartItems.reduce((acc, item) => {
    // Remove the ₦ and comma to do math
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + priceNum;
  }, 0);

  return (
    <div style={{ padding: '50px 10%', minHeight: '80vh' }}>
      <h1 style={{ color: '#5C3D2E', fontFamily: 'serif' }}>Your Shopping Bag</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go get some cake!</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={cartItemStyle}>
              <img src={item.img} alt={item.name} style={{ width: '80px', borderRadius: '10px' }} />
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{item.price}</p>
              </div>
            </div>
          ))}
          
          <div style={{ marginTop: '30px', borderTop: '2px solid #D8C3A5', paddingTop: '20px' }}>
            <h2>Total: ₦ {total.toLocaleString()}</h2>
            <button className='btn2' style={{ width: '100%', padding: '15px' }} onClick={() => {sub()}}>
               Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const cartItemStyle = {
  display: 'flex',
  backgrouundColor: '#b5a47cff',
  alignItems: 'center',
  padding: '15px 0',
  borderBottom: '1px solid #eee'
};

export default Cart;