import React from 'react'
import { useState } from 'react'
import Input from './Input'

const Form = () => {
    const initialValues = {
        product: "",
        price: 0,
        description: ""
    }
    const [values, setValues] = useState(initialValues)
    const [products, setProducts] = useState([])

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
                    <p><strong>Product: {prod.product}</strong></p>
                    <p>Price: {prod.price}</p>
                    <p>Description: {prod.description}</p>
                    <hr />
                </div>

            ))}
        </>
    )
}

export default Form