import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Forgotpass = () => {
    const [email,setEmail]=useState("")
    const [success,setSucess]=useState(false)
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("/user/forgotpass",{email}).then((res)=>{
            if(res.status===200){
                setSucess(true);
            }
        }).catch(e=>console.log(e.message))
    }
  return (
    <div className="OrderDetails">
            <h2>Get The Reset Link</h2>
            <form   >
                <div className="frm">
                    <input
                        className="in1"
                        type='email'
                        placeholder="enter email id"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                   
                </div>
                <button onClick={handlesubmit} className='lgbutton' >Submit</button>
            </form>
            {success===true?
             <span style={{marginTop:"20px",color:"violet"}}>Email successfully send !!! if you have account with us reset password !!!</span>:""
            }
           
        </div>
  )
}

export default Forgotpass