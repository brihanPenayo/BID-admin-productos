import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Details = () => {
    const { prod } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${prod}`)
            .then(res => { setProduct(res.data?.prod) })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handleDelete = id => {
        axios.delete(`http://localhost:8000/product/${id}`)
            .then(res => { alert("Producto Eliminado"), navigate("/") })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <p><strong>Product: {prod}</strong></p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <hr />
            <Link to="/" > <button>Back</button> </Link>
            <button className="fa fa-trash" onClick={e => { handleDelete(product._id) }}></button>
        </div>
    )
}

export default Details