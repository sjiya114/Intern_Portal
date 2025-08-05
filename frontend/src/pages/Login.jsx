import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cross_icon from '../assets/cross_icon.png'
import { AppContext } from '../context/AppContext';
function Login() {
  const {login}=useContext(AppContext);
  const navigate=useNavigate("");
  const [email, setEmail] = useState("");
  const [hidden,setHidden]=useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login({email:email,password:password});
    document.getElementById("form").reset();
  }
  return (
    <>
      {!hidden && <div className='flex justify-center  items-center h-screen bg-white/10 fixed z-100 top-0 left-0 bottom-0 right-0'>
        
        <form id='form' onSubmit={handleSubmit} className='flex bg-black flex-col text-white space-y-2 shadow-2xl shadow-black  w-[300px] h-[370px] border-white border-1   max-w-[300px]:w-full  px-5 py-5 rounded-md'>
           <img onClick={()=>{setHidden(true);navigate("/")}} src={cross_icon} className='w-6 h-6 ml-[90%]' alt="" />
          <h1 className='text-center font-bold text-3xl mb-6'>Login Page</h1>
          <label htmlFor="email">Email</label>
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={email} className='bg-gray-400  text-black rounded-md px-2 py-1' placeholder='Enter your email here' id='email' name='email' />
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} className='bg-gray-400 rounded-md  text-black px-2 py-1 ' placeholder='Enter your password here' id='password' name='password' />
          <button type='submit' className='bg-blue-900 mt-4 mb-4 hover:bg-blue-600 px-1 py-2 text-white rounded-md'>Login</button>
          <p>Don't have an account <b><Link to="/signup">Signup</Link></b></p>
        </form>
      </div>}
    </>
  )
}

export default Login

