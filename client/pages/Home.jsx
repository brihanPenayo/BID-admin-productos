import React, { useState, useEffect } from 'react'
import AllProducts from '../components/AllProducts'
import Form from '../components/Form'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/product")
            .then(res => { setProducts(res.data.prod) })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <Form products={products} setProducts={setProducts} />
            <AllProducts products={products} />
        </>
    )
}

export default Home