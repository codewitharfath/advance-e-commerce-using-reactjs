import React from 'react'
import "./Nav.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const Nav = ({query,handleInputChange}) => {
  return (
    <nav>
        <div className="nav-container">
            <input type="text" placeholder='enter your search' value={query} onChange={handleInputChange}  className='search-input'/>

        </div>
        <div className="profile-container">
            <a href="#">
            <FiHeart  className='nav-icons'/>
            </a>
            <a href="">
            <AiOutlineShoppingCart className='nav-icons' />
            </a>
            <a href="">
            <AiOutlineUser className='nav-icons' />
            </a>
        </div>
    </nav>
  )
}

export default Nav
