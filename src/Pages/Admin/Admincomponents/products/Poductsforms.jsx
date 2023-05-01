import React, { useEffect, useState } from 'react'
import './Productform.css'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete,AiOutlineEye } from 'react-icons/ai'

import axios from 'axios';
export const CreateProductforms = () => {
    const [product, setProduct] = useState({ name: "", price: "", description: "", stock: 0 })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const [file, setFile] = useState(null);
    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }
    const formdata = new FormData();
    formdata.append('name', product.name)
    formdata.append('price', product.price)
    formdata.append('description', product.description)
    formdata.append('collectionId', "644e635a5cc32ae013c1a9a3")

    formdata.append('stock', product.stock)
    formdata.append('file', file);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/product/create', formdata).then((res) => {
            if (res.status === 200) {
                alert("product created successfully")
            }
        }).catch(e = console.log(e))

    }
    return (
        <div className="createproductForm">
            <form method="POST" onSubmit={handleSubmit}>
                <div className="createproduct">

                    <input
                        className="in1"
                        placeholder="Product Name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required={true}
                    />
                    <input
                        className="in1"
                        name="price"
                        placeholder="price"
                        value={product.price}
                        onChange={handleChange}
                        required={true}
                    />

                    <textarea
                        className="in1"

                        name="description"
                        placeholder="description"
                        value={product.description}
                        onChange={handleChange}
                        required={true}
                    />
                    <input
                        className="in1"
                        type="file"


                        onChange={handleFileChange}
                        required={true}
                    />
                    <input
                        className="in1"
                        name='stock'
                        type='Number'
                        placeholder="stocks"
                        value={product.stock}
                        onChange={handleChange}
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

export const GetAllProducts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/product/all');
            setData(response.data.product);
            console.log(data);

        };
        fetchData();
    });
    return (
        <div className="GetAllProducts">
            <div className="topindenxing">
                <div className='topindxing1'>product id</div>
                <div className='topindxing2'>Name</div>
                <div className='topindxing3'>Price</div>
                <div className='topindxing4'>Stock</div><div className='topindxing5'>Actions</div>

            </div>
            <div className="productsfromapi">

                {data.length !== 0 ? data?.map((item, i) => (
                    <Product1 key={i} name={item.name} price={item.price} stock={item.stock} id={item._id} />
                )) : <p>data is not available</p>}
            </div>
        </div>
    )
}
export const Product1 = (props) => {
    console.log(props);
    return (
        <div className="topindenxing">
            <div className='topindxing1'><p>{props.id}</p></div>
            <div className='topindxing2'> <p>{props.name}</p></div>
            <div className='topindxing3'><p>{props.price} </p></div>
            <div className='topindxing4'><p>{props.stock}</p></div><div className='topindxing5'>
                <span>
                    <AiOutlineEye/>
                </span>
                <span>
                    <BiEditAlt  />
                </span>
                <span>
                    <AiOutlineDelete />
                </span>
            </div>
        </div>
    )
}