import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const LoginPage = () => {
  const [details, setDetails] = useState({ email: "", password: "" })
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const adduser = (user) => {
    dispatch({
      type: "setuser",
      payload: user
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const email = details.email;
    const pass = details.password;
    axios
      .post("/user/signin", {
        email,
        password: pass,
      })
      .then((res) => {
        if (res.status === 200) {
          adduser(res.data.user)
          res.data.user.role === "ADMIN" ? nav("/admin/dashboard") : nav("/");
        
        } else if (res.status === 404) {
          setMsg("Invalid Credentials")
          setLoading(false)
        }

      })
      .catch((e) => {
        setMsg("Something Went Wrong")
        setLoading(false)
      });
    
  }
  return (
    <div className="loginpage">
      <div className="container">
        <div className="left">
          <h1 className="brand">shopee</h1>
          <p> Let's get Checkout</p>
        </div>
        <div className="right">
          <form method='POST' onSubmit={handleSubmit} >
            <div className="frm">
              <input
                className="in1"
                type="email"
                placeholder="email"
                name='email'
                value={details.email}
                onChange={handleChange}
                required={true}
              />
              <input
                className="in1"
                type="password"
                placeholder="password"
                name='password'
                value={details.password}
                onChange={handleChange}
                required={true}
              />
            </div>
            <button disabled={loading===true} className="lgbutton">{loading===true?"Loading":"Login"}</button>
          </form>
          <NavLink>
            <p className="ln">Forgot Password</p>
          </NavLink>
          <NavLink to="/register">
            <p className="ln">Not have an Account ? Register now</p>
          </NavLink>
        </div>
        {msg !== "" ? <div className="msgbox"><p>{msg}</p></div> : ""}
      </div>
    </div>
  )
}

export default LoginPage