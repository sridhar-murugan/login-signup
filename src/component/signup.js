import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign =()=>{
    const [email,setmail]=useState('')
    const [password,setpassword]=useState('')
    const navigate = useNavigate();

    const handlesign =()=>{
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        alert('sign up sucessful');
        navigate("/Login");

    
    };
    return(
        <div  className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <h2 className='text-center'> Sign Up</h2>
                        <div className='p-3'> 
                        <label for="email" className='form-label'>Email:</label>
                        <input type="email"className='form-control 'value={email}onChange={(e)=>setmail(e.target.value)} placeholder='Enter Your Email'></input>
                        </div>
                        <div className='p-3'>
                        <label for="password" className='form-label'>Password:</label>
                        <input type="password"className='form-control 'value={password}onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Your Password'></input>
                        </div>
                        <div className='p-3 text-center d-grid'> 
                        <button onClick={handlesign} type='button' className='btn btn-primary btn-block'>SIGNUP</button>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Sign;
