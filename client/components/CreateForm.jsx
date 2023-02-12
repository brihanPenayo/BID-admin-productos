import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Input from './Input'

const Form = ({ products, setProducts }) => {
    const initialValues = {
        product: "",
        price: 0,
        description: ""
    }
    const [values, setValues] = useState(initialValues)

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
            .then(res => { res.data })
            .catch(function (error) {
                console.log(error);
            });

        setValues(initialValues)
    }

    return (

        <form className="App" onSubmit={handleSubmit}>
            <Input type="text" value={values.product} onChange={handleChange}
                label="Product" name="product" placeholder="Product Name" />
            <Input type="number" value={values.price} onChange={handleChange}
                label="Price" name="price" />
            <Input type="text" value={values.description} onChange={handleChange}
                label="Description" name="description" placeholder="Product Description" />
            <button type='submit'>Create</button>
            <hr />
        </form>
    )
}

export default Form