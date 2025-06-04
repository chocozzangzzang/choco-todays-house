import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productStore } from '../store/productStore';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams();
    const { getProductDetail, detailProduct } = productStore();
    const [ size, setSize ] = useState("");
    useEffect(() => {
        getProductDetail(id);
    }, [])

    return (
        <div className='detail-box'>
            <div className='detail-left'>
                <img src={detailProduct?.img} alt={detailProduct?.title} />
            </div>
            <div className='detail-right'>
                <h3>{detailProduct?.title}</h3>
                <h3>₩{detailProduct?.price}</h3>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">SIZE</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        label="SIZE"
                        onChange={(e) => setSize(e.target.value)}
                        fullWidth
                    >
                        {
                            detailProduct?.size.map((sz) => <MenuItem value={sz} fullWidth>{sz}</MenuItem> )
                        }
                    </Select>
                </FormControl>
                <Button variant='contained' size='large'>장바구니에 추가</Button>
            </div>
        </div>
    )
}

export default ProductDetail