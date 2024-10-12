import Card from '@mui/material/Card';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css'
import { useRef } from 'react';
import axios from 'axios';


const Login=()=>{
    const userName=useRef('');
    const password=useRef('');

    const navigate=useNavigate();

   const handleSubmit=async(event)=>{
    event.preventDefault();

    let userElement=userName.current.value;
    let passwordElement=password.current.value;

    try{
        const response=await axios.post('http://127.0.0.1:8000/login/',{
            username:userElement,
            password:passwordElement
        }

        )
        localStorage.setItem('token', response.data.token);
        navigate("/home");
    }catch (error) {
        console.error('Login failed:', error);
    }
    
   }
    return(
        <>
            <Card variant="outlined" className='card1'>
                <h1 className='login-heading'>Log in</h1>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3" style={{ marginTop: "3.5rem" }}>
                        <input type="text" className='inputs' placeholder="Username" ref={userName} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className='inputs' placeholder="Password" ref={password}/>
                    </div>
                    <button type='submit' className=" mt-3 login">Log in</button>
                </form>
                <p className='mt-3 text-center'>Forget Password?</p>
                <p className='text-center mt-3'>Don't have an account?<Link to="/signup" style={{color:"#4CB5F9"}}>Sign Up</Link></p>
            </Card>
        </>
    )

}
export default Login;