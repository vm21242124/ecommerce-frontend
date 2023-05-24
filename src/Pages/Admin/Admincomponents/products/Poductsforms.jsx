import React, { useEffect, useState } from 'react'
import './Productform.css'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'

import axios from 'axios';
import { appendStringAfterLength } from '../../../../UtilityFunctions';
export const CreateProductforms = () => {
    const [product, setProduct] = useState({ name: "", price: "", description: "", stock: 0 })
    const [collectionId, setCollectionId] = useState("")
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        axios.get('/collections/all').then((res) => setCollection(res.data)).catch(e => console.log(e))
    })
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
    formdata.append('collectionId', collectionId ? collectionId : "644e505521c34bb5146019b6")
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
                        name='stock'
                        type='Number'
                        placeholder="stocks"
                        value={product.stock}
                        onChange={handleChange}
                        required={true}
                    />
                   
                    <h3>choose category</h3>
                    <div className="allavailablecartegories" style={{height:"50px" ,overflow:"auto"}}>
                        {collection.length !== 0 ? collection.map((item, i) => (
                            <div onClick={() => {
                                
                                setCollectionId(item._id)
                            }} className='collections' key={i}>
                                <span>{item.name}</span>
                            </div>
                        )) :
                            <div><span>No Categories</span></div>}
                    </div>
                    <input
                        className="in1"
                        type="file"


                        onChange={handleFileChange}
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


        };
        fetchData();
    });
    return (
        <div className="GetAllProducts">
            <div className="topindenxing">

                <div className='topindxing2'>Name</div>
                <div className='topindxing3'>Price</div>
                <div className='topindxing4'>Stock</div><div className='topindxing5'>Actions</div>

            </div>
            <div className="productsfromapi">

                {data?.map((item, i) => (
                    <Product1 key={i} name={item.name} price={item.price} stock={item.stock} id={item._id} />
                ))}
            </div>
        </div>
    )
}
export const Product1 = (props) => {
    const [showm, setShowm] = useState(false)
    const handleDelete = (e) => {
        e.preventDefault();
        setShowm(true)
    }
    const confirmDelete = (e) => {
        e.preventDefault();

        axios.delete(`product/delete/${props.id}`).then(() => console.log("product deleted")).catch((e) => console.log(e.message))
        setShowm(false)
    }
    const name = appendStringAfterLength(props.name, 20, "...");
    return (
        <>
            <div className="topindenxing">

                <div className='topindxing2'> <p>{name}</p></div>
                <div className='topindxing3'><p>{props.price} </p></div>
                <div className='topindxing4'><p>{props.stock}</p></div><div className='topindxing5'>
                    <span>
                        <AiOutlineEye />
                    </span>
                    <span>
                        <BiEditAlt />
                    </span>
                    <span onClick={handleDelete}>
                        <AiOutlineDelete />
                    </span>
                </div>

            </div>
            {showm ? <div className="topindenxing">
                are you sure to delete this message
                <button onClick={confirmDelete}>YES</button>
                <button onClick={() => setShowm(false)}>NO</button>
            </div> : ""}
        </>
    )
}