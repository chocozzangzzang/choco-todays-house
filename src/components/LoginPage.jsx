import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { authStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { login } = authStore();
    const navigate = useNavigate();
    const userLogin = (event) => {
        event.preventDefault();
        if(!email.trim() || !password.trim()) return;
        if(email === "test@naver.com" && password === "1234") {
            login({nowUserName : email});
        }
        setEmail(""); setPassword("");
        navigate("/");
    }

    return (
        <form onSubmit={userLogin} className='login-page'>
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth />
            <TextField 
                id="outlined-basic"
                type="password" 
                label="Password" 
                variant="outlined" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth />
            <Button 
                type="submit" 
                variant='contained' 
                color='secondary'>
                로그인
            </Button>
        </form>
    )
}

export default LoginPage