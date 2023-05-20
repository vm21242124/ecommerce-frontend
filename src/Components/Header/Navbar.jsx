import React, { useState } from 'react'
import './Navbar.css'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const user = useSelector((state) => state.user.user)
    
    const [search,setSearch]=useState("")
    const nav = useNavigate()
    return (
        <div className="navbar">
            <div className="logoside">
                <h3 style={{ cursor: "pointer" }} onClick={() => nav("/")}>Shopee</h3>
            </div>
            <div className="serchbar">
                <form onSubmit={()=>nav(`/search/${search}`)} className="search">
                    <input style={{ "borderRadius": "10px", "height": "22px" }} placeholder='search' type="text" className="in1" onChange={(e)=>setSearch(e.target.value)} />
                    <CiSearch type='submit' className='ser' />
                </form>
            </div>
            <div className="cartandlogin">

                <AiOutlineShoppingCart className='car' />
                <NavLink className="NavLink" to="/cart"><span >cart</span></NavLink>
                <span>{user?.name ? <span>Hi {user.name} !</span> : <NavLink className="NavLink" to="/login"><span>login</span></NavLink>}</span>
                <span><MdKeyboardArrowDown /></span>

            </div>
        </div>
    )
}

export default Navbar