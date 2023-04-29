import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="loginpage">
      <div className="container">
        <div className="left">
          <h1 className="brand">Shopee</h1>
          <p> Everything that you want </p>
        </div>
        <div className="right">
          <form >
            <div className="frm">
              <div className="nameconcat">
              <input
                className="in1"
                placeholder="First name"
                // onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <input
                className="in1"
        
                placeholder="Last name"
                // onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              </div>
              <input
                className="in1"
                type="email"
                placeholder="Email"
                // onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <input
                className="in1"
                type="password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
               <input
                className="in1"
                type="password"
                placeholder="Confirm Password"
                // onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>
            <button className="lgbutton">Login</button>
          </form>
          <NavLink>
            <p className="ln">Forgot Password</p>
          </NavLink>
          <NavLink to="/login">
            <p className="ln">Already have an account ? Login Now</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage