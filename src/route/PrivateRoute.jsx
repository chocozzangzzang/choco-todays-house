import { authStore } from '../store/authStore'
import { Navigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const PrivateRoute = () => {
    const { authenticated } = authStore();
    return (
        authenticated ? <ProductDetail /> : <Navigate to="/login" />
    )
}

export default PrivateRoute