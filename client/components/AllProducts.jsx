import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllProducts = ({ products, removeFromDom }) => {
    const handleDelete = id => {
        axios.delete(`http://localhost:8000/product/${id}`)
            .then(res => { removeFromDom(id) })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {products.map((prod, idx) => (
                <div key={idx}>
                    <div className='all_products' >
                        <Link className='Link' to={prod.product}><strong>{prod.product}</strong></Link>
                        <div>
                        <Link to={`/${prod.product}/edit`}> <button className='fa fa-pen' /></Link>
                        <button className='fa fa-trash' onClick={(e) => { handleDelete(prod._id) }} />
                        </div>
                    </div>
                    <hr />
                </div>))}
        </>
    )
}

export default AllProducts