import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../Components/Header/Navbar'
import './ProfilePage.css'
import { BiEditAlt } from 'react-icons/bi'
const ProfilePage = () => {

  const [activeform, setActiveform] = useState("profile")


  return (
    <>
      <Navbar />
      <div className="profilePage">
        <div className='profilepagecontainer'>
          <div className="tabs">
            <span onClick={() => setActiveform("profile")}>PROFILE</span>
            <span onClick={() => setActiveform("order")}>ORDER</span>
            <span onClick={() => setActiveform("logout")}>LOGOUT</span>
          </div>
          <div className="tabforms">
            {activeform === "profile" ? <ProfileFrom /> : <OrderForm />}

          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
export const ProfileFrom = () => {
  const user = useSelector((state) => state.user.user)
  const [active, setActive] = useState(false)
  const [emailfrm, setEmailfrm] = useState(false)
  const popup = (e) => {
    e.preventDefault()
    setActive(!active)
  }
  return (
    <div className="profileFrom">
      <div className="infouser">

        <h3>{user?.name}</h3>
        <div className="emailedit">

          <p style={{ fontSize: "10px" }}>{user?.email}</p>
          <BiEditAlt onClick={() => setEmailfrm(!emailfrm)} style={{ cursor: "pointer" }} />
        </div>
        {emailfrm ?
          <><input type="text" placeholder='enter new email' className="in1" /><button style={{ width: "25%", margin: "10px", backgroundColor: "red", color: "white" }}
            className="lgbutton">Submit</button></> : ""}
        <h4 onClick={popup} style={{ color: "violet", cursor: "pointer" }}>change password</h4>
        <div className="activefrm">
          {active ? <ChangepassForm /> : ""}
        </div>
      </div>
    </div >
  )
}
export const OrderForm = () => {
  return (
    <div className="profileFrom">
      orderpage
    </div>
  )
}

export const ChangepassForm = () => {
  return (
    <div className="changepassform">
      <form>
        <div className="frm">
          <input
            className="in1"
            type="password"
            placeholder="new password"

          />
          <input
            className="in1"
            type="password"
            placeholder="confirm password"

          />
        </div>
        <button style={{ width: "40%", margin: "10px" }} className="lgbutton">Change Password</button>
      </form>
    </div>
  )
}