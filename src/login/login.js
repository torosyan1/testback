/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import '../login/loginStyle.css'
import Axios from 'axios'

function Login() {
  const [login,setLogin]=useState('')
  const [password,setPassword]=useState('')


async function submit(){
 await Axios.post('http://127.0.0.1:3000/api/userModel', {
    login:login,
    pass: password,
  }).then(
   res=>console.log(res.data)
  ).catch(e=>console.log(e))

 await Axios.get('http://127.0.0.1:3000/data')
  .then((response) => {
 console.log(response.data)
  });


}



  return (
    <div className="Login">
        <form className='formLogin'>
          <div className='title'>
                <h2>Login</h2>
            </div>
            <div className='loginGroup'>
              <label className='label'>Email</label>
            <input className='loginInput' placeholder='Enter email' type='text' value={login} onChange={(e)=>{setLogin(e.target.value)}} />
            </div>

            <div className='passwordGroup'>
              <label className='label'>Password</label>
            <input className='passwordInput' placeholder='Enter password' type='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            <div className='saveUser'>
            <input type='checkbox'/>
            <label>Remember me</label>
            </div>

            <div className='loginButton'>
            <button onClick={submit} >Submit</button>
            </div>
            <div className='forgot'>
              <a>Forgot Password?</a>
            </div>
        </form>
    </div>
  );
}

export default Login;
