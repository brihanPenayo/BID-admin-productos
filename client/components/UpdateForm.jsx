import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateForm = () => {
    const navigate = useNavigate();
    const { prod } = useParams();
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${prod}`)
            .then(res => {
                setProduct(res.data.prod.product),
                    setPrice(res.data.prod.price),
                    setDescription(res.data.prod.description)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/product/${prod}/edit`, {
            product: product,
            price: price,
            description: description
        })
            .then(res => { alert("Product Updated"), navigate("/") });
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product</label><br />
                    <input type="text"
                        name="product"
                        value={product}
                        onChange={(e) => { setProduct(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <button type="submit">Update</button>
                <Link to={`/${prod}`} > <button>Back</button> </Link>
            </form>
        </div>
    )
}

export default UpdateForm