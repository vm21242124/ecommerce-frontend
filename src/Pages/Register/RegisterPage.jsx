import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState({
    email: "",
    password: "",
    cpassword: "",
    fname: "",
    lname: "",
  });

  const nav = useNavigate();
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
    const name = details.fname + " " + details.lname;
    const email = details.email;

    if (details.password === details.cpassword) {
      const pass = details.password;
      axios
        .post("http://127.0.0.1:5000/api/user/register", {
          name,
          email,
          password: pass,
        })
        .then((res) => {
          if (res.status === 200) {
            nav("/login");
          }else if (res.status === 403) {
            setLoading(false)
            setMsg("User Already Exits")
          }
        })
        .catch((e) => {
          setLoading(false)
          
        });
    } else {
      console.log("pass word not matching");
    }
  };
  return (
    <div className="loginpage">
      <div className="container">
        <div className="left">
          <h1 className="brand">Shopee</h1>
          <p> Everything that you want </p>
        </div>
        <div className="right">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="frm">
              <div className="nameconcat">
                <input
                  className="in1"
                  placeholder="First name"
                  name="fname"
                  value={details.fname}
                  onChange={handleChange}
                  required={true}
                />
                <input
                  className="in1"
                  name="lname"
                  placeholder="Last name"
                  value={details.lname}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <input
                className="in1"
                type="email"
                name="email"
                placeholder="Email"
                value={details.email}
                onChange={handleChange}
                required={true}
              />
              <input
                className="in1"
                type="password"
                name="password"
                placeholder="Password"
                value={details.password}
                onChange={handleChange}
                required={true}
              />
              <input
                className="in1"
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                value={details.cpassword}
                onChange={handleChange}
                required={true}
              />
            </div>
            <button disabled={loading===true} type="submit" className="lgbutton">
              {loading ===true ? "Loading..." : "Register"}
            </button>
          </form>

          <NavLink>
            <p className="ln">Forgot Password</p>
          </NavLink>
          <NavLink to="/login">
            <p className="ln">Already have an account ? Login Now</p>
          </NavLink>
        </div>
        {msg !== "" ? <div className="msgbox"><p>{msg}</p></div> : ""}
      </div>
    </div>
  );
};

export default RegisterPage;
