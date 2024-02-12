import React from 'react'
import { useState } from 'react'
 import './Navbar.css'
// import './Components/Navbar/Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

const [menu,setMenu] = useState("shop");







  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration : "none "}} to="/"></Link>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration : "none "}} to="/mens"></Link>Men {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration : "none "}} to="/womens"></Link>Women{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration : "none "}} to="/kids"></Link>Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>
<div className='nav-login-cart'>
   <Link to ="/login"></Link> <button>Login</button>
    <Link to="/cart"></Link><img src={cart_icon} alt=""/>
    <div className='nav-cart-count'>0</div>
</div>

    </div>
  )
}

export default Navbar
