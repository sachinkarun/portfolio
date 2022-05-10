import React from 'react'
import './ProductList.css'
import Product from '../product/product.js'
import { products } from '../../data'

const ProductList = ({mode}) => {
    return (
        <div className={mode ? "pl2" : "pl"}>
            <div className="pl-texts">
                <h1 className="pl-title">Apps I've Built</h1>
                <p className="pl-desc">
                For the things we have to learn before we can do them, we learn by doing them.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
