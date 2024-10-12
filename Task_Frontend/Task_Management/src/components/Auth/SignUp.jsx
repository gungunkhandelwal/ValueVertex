import '../../assets/css/SignUp.css'
import Card from '@mui/material/Card';
 import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const SignUp=()=>{
    const username=useRef('');
    const email=useRef('');
    const first_name=useRef('');
    const last_name=useRef('');
    const password=useRef('');
    const [userRegister,setUserRegister]=useState([]);

    const navigate=useNavigate();

    const handleSubmit=async(event)=>{
        event.preventDefault();
        let userElement=username.current.value;
        let emailElement=email.current.value;
        let passwordElement=password.current.value;
        let firstnameElement=first_name.current.value;
        let lastnameElement=last_name.current.value;

        try{
            const response=await axios.post('http://127.0.0.1:8000/register/',
                {
                    username:userElement,
                    email:emailElement,
                    first_name:firstnameElement,
                    last_name:lastnameElement,
                    password:passwordElement
                }

            )
            setUserRegister(response.data);
            console.log(response.data);
            navigate("/");
        }
        catch (err) {
            console.error('Registeriation failed:', err);
        }
    }
    return(
        <>
         <Card variant="outlined" className='card3'>
                <h1 className='signup-task text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3" style={{ marginTop: "3.5rem" }}>
                        <input type="text" className='signup-inputs' placeholder="Username" ref={username}  />
                    </div>
                    <div className="mb-3">
                        <input type="email" className='signup-inputs' placeholder="Email"  ref={email} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='signup-inputs' placeholder="First name" ref={first_name}  />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='signup-inputs' placeholder="Last name" ref={last_name} />
                    </div>
                    <div className="mb-3 ">
                        <input type="password" className='signup-inputs' placeholder="Password" ref={password}/>
                    </div>
                    <button type='submit' className=" mt-3 signup">Sign Up</button>
                </form>
                <p className='text-center mt-3'>Don't have an account?<Link to="/" style={{color:"#4CB5F9"}}>Log in</Link></p>
            </Card>

        </>
    )
}

export default SignUp;