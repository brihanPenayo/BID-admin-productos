import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = ({ products }) => {
    return (
        <div>
            {products.map((prod, idx) => (
                <div key={idx}>
                    <Link to={prod.product}><strong>{prod.product}</strong></Link>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default AllProducts