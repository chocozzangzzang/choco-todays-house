import React from 'react'

const ProductCard = ({ product }) => {
    
    return (
        <div>
            <img src={product?.img} />
            <p>{product?.choice? "**HOUSE'S CHOICE**" : ""}</p>
            <p>{product?.title}</p>
            <p>{product?.price}</p>
            <p>{product?.new? "NEW!!" : ""}</p>
        </div>
    )
}

export default ProductCard