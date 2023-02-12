import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = ({ products }) => {
    return (
        <>
            {products.map((prod, idx) => (
                <div key={idx}>
                    <div className='all_products' >
                        <Link className='Link' to={prod.product}><strong>{prod.product}</strong></Link>
                        <button className='delete_product'><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    <hr/>
                </div>))}
        </>
    )
}

export default AllProducts