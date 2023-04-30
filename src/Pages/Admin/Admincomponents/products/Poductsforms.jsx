import React from 'react'
import './Productform.css'
export const CreateProductforms = () => {
    return (
        <div className="createproductForm">
            <form method="POST" >
                <div className="createproduct">

                    <input
                        className="in1"
                        placeholder="Product Name"
                        name="pname"
                    //   value={details.fname}
                    //   onChange={handleChange}
                    //   required={true}
                    />
                    <input
                        className="in1"
                        name="price"
                        placeholder="price"
                        //   value={details.lname}
                        //   onChange={handleChange}
                        required={true}
                    />

                    <textarea
                        className="in1"

                        name="description"
                        placeholder="description"
                        // value={details.email}
                        // onChange={handleChange}
                        required={true}
                    />
                    <input
                        className="in1"
                        type="file"

                        // value={details.password}
                        // onChange={handleChange}
                        required={true}
                    />
                    <input
                        className="in1"

                        placeholder="Stocks"
                        // value={details.cpassword}
                        // onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="bn">

                    <button type="submit" className="createproductbtn">
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export const GetAllProducts=()=>{
    return(
        <div className="GetAllProducts">
            <div className="topindenxing">
                <span>product name</span><span>categories</span><span>price</span><span>stock</span>
            </div>
        </div>
    )
}