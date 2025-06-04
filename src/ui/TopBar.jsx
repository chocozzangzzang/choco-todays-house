import { useNavigate } from 'react-router-dom'
import { authStore } from '../store/authStore';

const TopBar = () => {
    const navigate = useNavigate();
    const { authenticated, logout } = authStore();
    const goToLoginPage = () => {
        navigate("/login");
    }
    const logoutUser = () => {
        logout();
        navigate("/");
    }
    
    return (
        <div className="top-bar">
            <svg dataSlot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            {
                !authenticated ?
                <p className="login-btn" onClick={goToLoginPage}>로그인</p> :
                <p className="login-btn" onClick={logoutUser}>로그아웃</p>
            }
        </div>
    )
}

export default TopBar