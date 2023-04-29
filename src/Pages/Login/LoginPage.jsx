import React from 'react'
import { NavLink } from 'react-router-dom'
import './LoginPage.css'
const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="container">
        <div className="left">
          <h1 className="brand">VMstudio</h1>
          <p>code with vm2124 </p>
        </div>
        <div className="right">
          <form >
            <div className="frm">
              <input
                className="in1"
                type="email"
                placeholder="email"
                // onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <input
                className="in1"
                type="password"
                placeholder="password"
                // onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>
            <button className="lgbutton">Login</button>
          </form>
          <NavLink>
            <p className="ln">Forgot Password</p>
          </NavLink>
          <NavLink to="/register">
            <p className="ln">Not have an Account ? Register now</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LoginPage