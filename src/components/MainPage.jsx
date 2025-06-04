import { useEffect } from 'react'
import ProductCard from './ProductCard';
import { productStore } from '../store/productStore';

const MainPage = () => {
    const { fetchProducts, productList, queryString, searchedProduct } = productStore();

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='products-page'>
            {
                (queryString.trim() ? searchedProduct : productList)?.map( (product) => <ProductCard key={product.id} product={product}/> )
            }
        </div>
    )
}

export default MainPage