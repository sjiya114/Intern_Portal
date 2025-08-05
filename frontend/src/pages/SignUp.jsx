import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cross_icon from '../assets/cross_icon.png'
import { AppContext } from '../context/AppContext';
function Signup() {
  const navigate=useNavigate();
  const {signup}=useContext(AppContext);
  const [hidden,setHidden]=useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    signup({name:name,email:email,password:password});
    document.getElementById('form').reset();
  }
  return (
    <>
      {!hidden && <div className='flex justify-center items-center h-screen  bg-white/40 fixed z-100 top-0 left-0 bottom-0 right-0'>
        <form id='form' onSubmit={handleSubmit} encType='multipart/form-data' className='flex flex-col bg-black text-white space-y-2 w-[320px]  border-white border-1 shadow-gray-600 shadow-2xl   max-w-[300px]:w-full  px-5 py-5 rounded-md'>
             <img onClick={()=>{setHidden(true);navigate("/")}} src={cross_icon} className='w-6 h-6 ml-[90%]' alt="" />
          <h1 className='text-center font-bold text-3xl mb-6'>Signup Page</h1>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(e) => { setName(e.target.value) }} className='bg-gray-400  text-black rounded-md px-2 py-1' placeholder='Enter your Name here' id='name' name='name' />
          <label htmlFor="email">Email</label>
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} className='bg-gray-400  text-black rounded-md px-2 py-1' placeholder='Enter your email here' id='email' name='email' />
          <label htmlFor="password">Password</label>
            <input type="password" onChange={(e) => { setEmail(e.target.value) }} className='bg-gray-400  text-black rounded-md px-2 py-1' placeholder='Enter your password here' id='password' name='password' />
          <button type='submit' className='bg-blue-900 mt-4 mb-4 hover:bg-blue-600 px-1 py-2 text-white rounded-md'>Create Account</button>
          <p className='text-white'>Already have an account <b><Link to="/">Login</Link></b></p>
        </form>
      </div>}
    </>
  )
}

export default Signup

