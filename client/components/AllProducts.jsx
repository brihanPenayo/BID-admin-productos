import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts = ({ products }) => {
    const handleDelete = e => {
        console.log(e.target.id)
    }
    return (
        <>
            {products.map((prod, idx) => (
                <div key={idx}>
                    <div className='all_products' >
                        <Link className='Link' to={prod.product}><strong>{prod.product}</strong></Link>
                        <button className='fa fa-trash' id={[prod.product, prod.price]} onClick={handleDelete}></button>
                    </div>
                    <hr />
                </div>))}
        </>
    )
}

export default AllProducts