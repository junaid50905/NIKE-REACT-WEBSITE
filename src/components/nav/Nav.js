import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import {
    BsSearch,
    BsHeart,
    BsHandbag
} from "react-icons/bs";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
            <li><BsSearch className='nav-icons'/></li>
            <li><BsHeart className='nav-icons'/></li>
            <li className='cart'><BsHandbag className='nav-icons'/><span>5</span></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
