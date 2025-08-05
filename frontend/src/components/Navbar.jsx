import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logofinal.png';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png';
import { AppContext } from '../context/AppContext';

function Navbar() {
  const [hidden,setHidden]=useState(true);
  const {token,setToken,setUserData}=useContext(AppContext);
  const navigate=useNavigate();
  return (
    <>
      <div className='text-white max-md:hidden flex flex-row shadow-2xl shadow-zinc-600  max-w-screen-xl px-4 py-2 mt-6 mx-auto border-t-1  border-gray-400 rounded-4xl justify-between items-center  '   >
      <img src={logo} className='w-40 h-14'  alt="logo" />
      <div className='flex flex-row font-bold font-stretch-extra-expanded   space-x-10'  >
      <NavLink to="/">Home</NavLink>
      <NavLink>Gallery</NavLink>
      <NavLink to={`${token?'/dashboard':'/login'}`}  >Dashboard</NavLink>
      <NavLink to="/reward" >Rewards</NavLink>
      </div>
       <div  className='flex flex-row font-bold space-x-6'>
         <button className='border-1 border-gray-400 rounded-4xl px-4 py-2'  >Contact</button>
       {!token && <button onClick={()=>{navigate("/login")}} className='border-1  bg-white text-black shadow-2xl shadow-white hover:shadow-amber-100  border-gray-400 rounded-4xl px-4 py-2'>Login</button>}
        {token && <button onClick={()=>{localStorage.clear("token");localStorage.clear("fund");setToken("");setUserData({})}} className='border-1  bg-white text-black shadow-2xl shadow-white hover:shadow-amber-100  border-gray-400 rounded-4xl px-4 py-2'>Logout</button>}
       </div> 
    </div>
         {/* // mobile view */}
     <div className='fixed z-50 right-0 top-0 left-0 bg-black shadow-md shadow-white text-white flex flex-col   md:hidden hover:border-indigo-900 hover:text-white max-w-screen-xl px-4 py-2 mt-6 mx-auto border-t-1  border-gray-400 rounded-4xl justify-between items-center    '>
        <div className='flex flex-row space-x-10 '>
           <img src={logo} className='w-40 h-14'  alt="logo" />
          <img onClick={()=>{setHidden(!hidden)}}  src={`${hidden?menu_icon:cross_icon}`} className='w-8 h-8 mt-2' alt=""/>
        </div>
        {!hidden  &&<> < ul className='flex flex-col   items-center space-y-4 font-bold text-xl'>
     <NavLink to="/" >Home</NavLink>
      <NavLink>Gallery</NavLink>
      <NavLink to={`${token?'/dashboard':'/login'}`}  >Dashboard</NavLink>
       <NavLink to="/reward"  >Rewards</NavLink>
      </ul> 
      <div  className='flex flex-row max-md:mt-4 max-md:space-y-4  max-md:flex-col font-bold space-x-6'>
         <button className='border-1 border-gray-400 rounded-4xl px-4 py-2'  >Contact</button>
       {!token && <button onClick={()=>{navigate("/login")}} className='border-1  bg-white text-black shadow-2xl shadow-white hover:shadow-amber-100  border-gray-400 rounded-4xl px-4 py-2'>Login</button>}
       {token && <button onClick={()=>{localStorage.clear("token");setToken("");localStorage.clear("fund");  setUserData({})}} className='border-1  bg-white text-black shadow-2xl shadow-white hover:shadow-amber-100  border-gray-400 rounded-4xl px-4 py-2'>Logout</button>}
       </div> </>
}            
             </div> 
    
    
    
    
    
    </>
    
  )
}

export default Navbar
