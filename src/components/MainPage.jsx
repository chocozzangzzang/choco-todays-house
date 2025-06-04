import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

const MainPage = () => {
    const [ products, setProducts ] = useState([]);

    const getProducts = async() => {
        let url = "https://my-json-server.typicode.com/chocozzangzzang/choco-todays-house/products";
        let response = await axios.get(url);
        let data = response.data;
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='products-page'>
            {
                products?.map( (product) => <ProductCard product={product}/> )
            }
        </div>
    )
}

export default MainPage