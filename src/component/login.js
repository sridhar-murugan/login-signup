import React, { useState } from 'react';
const Login =()=>{
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const handlelogin =()=>{
        const storedemail = localStorage.getItem('email');
        const storedpassword = localStorage.getItem('password');
        if (email == storedemail && password == storedpassword){
            alert('login successful');
        }
        else{
            alert('invalid email or password');
        }
    }
    return(
        <div className='container'> 
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                    
                     <h2 className='text-center'>Loin Page</h2>
                     <div className='p-3'> 
                        <label for="email" className='form-label'>Email:</label>
                        <input type='email'className='form-control'value={email}onChange={(e)=>setemail(e.target.value)}placeholder='Enter Your Email'></input>
                     </div>
                     <div className='p-3'>
                        <label for="password" className='form-label'>Password:</label>
                        <input type='password'className='form-control'value={password}onChange={(e)=>setpassword(e.target.value)}placeholder='Enter Your Password'></input>
                     </div>
                     <div className='p-3 d-grid'>
                        <button onClick={handlelogin}type='button'className='btn btn-primary btn-block'>LOGIN</button>
                     </div>
                    </div> 
                </div>
            </div>

        </div>
    )
}
export default Login;