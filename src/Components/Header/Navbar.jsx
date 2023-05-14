import React from 'react'
import './Navbar.css'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const user=useSelector((state)=>state.user.user)

    return (
        <div className="navbar">
            <div className="logoside">
                <h3>Shopee</h3>
            </div>
            <div className="serchbar">
                <form className="search">
                    <input style={{ "borderRadius": "10px", "height": "22px" }} placeholder='search' type="text" className="in1" />
                    <CiSearch className='ser' />
                </form>
            </div>
            <div className="cartandlogin">

                <AiOutlineShoppingCart className='car' />
                <NavLink className="NavLink" to="/cart"><span >cart</span></NavLink> 
                <span>{user?.name ?  <span>Hi {user.name} !</span>  : <NavLink className="NavLink" to="/login"><span>login</span></NavLink>}</span>
                <span><MdKeyboardArrowDown/></span>

            </div>
        </div>
    )
}

export default Navbar