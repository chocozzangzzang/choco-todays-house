import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const MainPage = () => {
    const [ products, setProducts ] = useState([]);

    const getProducts = async() => {
        let url = "https://my-json-server.typicode.com/chocozzangzzang/choco-todays-house/products";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='products-page'>
            {
                products.map( (product) => <ProductCard product={product}/> )
            }
        </div>
    )
}

export default MainPage