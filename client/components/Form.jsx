import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Input from './Input'
import { Link } from 'react-router-dom'

const Form = () => {
    const initialValues = {
        product: "",
        price: 0,
        description: ""
    }
    const [values, setValues] = useState(initialValues)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/product")
            .then(res => { setProducts(res.data.prod) })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setProducts([...products, values])
        axios.post("http://localhost:8000/product", values)
            .then(res => { (res.status = 200), res.data })
            .catch(function (error) {
                console.log(error);
            });

        setValues(initialValues)
    }

    return (
        <>
            <form className="App" onSubmit={handleSubmit}>
                <Input type="text" value={values.product} onChange={handleChange}
                    label="Product" name="product" placeholder="Product Name" />
                <Input type="number" value={values.price} onChange={handleChange}
                    label="Price" name="price" />
                <Input type="text" value={values.description} onChange={handleChange}
                    label="Description" name="description" placeholder="Product Description" />
                <button type='submit'>Create</button>
            </form>
            <hr />
            {products.map((prod, idx) => (
                <div key={idx}>
                    <Link to={prod.product}><strong>{prod.product}</strong></Link>
                    {/* <p>Price: {prod.price}</p> */}
                    {/* <p>Description: {prod.description}</p> */}
                    <hr />
                </div>

            ))}
        </>
    )
}

export default Form