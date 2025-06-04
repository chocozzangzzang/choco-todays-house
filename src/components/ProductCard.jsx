import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${product.id}`);
    }
    return (
        <div className='product-card'>
            <div className='card-top'>
                <img src={product?.img} width={200} onClick={showDetail}/>
            </div>
            <div className='card-bottom'>
                <div>{product?.choice? "**HOUSE'S CHOICE**" : ""}</div>
                <div>{product?.title}</div>
                <div>₩ {product?.price}</div>
                <div>{product?.new? "NEW!!" : ""}</div>
            </div>
        </div>
    )
}

export default ProductCard