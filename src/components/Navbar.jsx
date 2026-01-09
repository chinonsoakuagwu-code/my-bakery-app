import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import logo from "../assets/logo 2.png"

function Navbar() {
  return (
    <>
        <nav>
            <div className="nav-items container" style={{ marginTop: 0, }}>
                <div className="logo">
                    <img src={logo} alt="Chevz Delite" style={{Width: '70px', height: '70px'}}/>
                </div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/CustomOrder">CustomOrder</NavLink></li>
                    <li><NavLink to="/OurProducts">OurProducts</NavLink></li>
                    <li style={{ alignContent: "right" }}><NavLink to="/Cart" style={({ isActive }) => ({color: isActive ? "#FFD524" : "#FFF8E7" })}
  >
    <ShoppingCart size={50} strokeWidth={3} />
  </NavLink>
</li>

                    </ul>
            </div>
        </nav>
    </>
)
}

export default Navbar