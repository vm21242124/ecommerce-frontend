import React from 'react'
import './Navbar.css'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logoside">
            <h3>Shopee</h3>
        </div>
        <div className="serchbar">
            <form className="search">
                <input style={{"borderRadius":"10px","height":"22px"}}  placeholder='search'  type="text"className="in1" />
                <CiSearch className='ser'/>
            </form>
        </div>
        <div className="cartandlogin">
            <div className="first">
                <AiOutlineShoppingCart className='car'/>
                <span>cart</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar