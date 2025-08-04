import React, { useContext, useEffect } from 'react'
import referral from '../assets/network.png';
import { AppContext } from '../context/AppContext';
import { LoaderIcon } from 'react-hot-toast';
function Dashboard() {
  const {getUserData,totalFund,userData}=useContext(AppContext);
  useEffect(()=>
  {
   getUserData();
  },[])
  return (
    <>
    <div className='text-white flex flex-col space-y-6 max-w-screen-xl mx-auto'>
     <div className=' mt-16 max-md:mt-40 '>
      <h1 className='text-4xl font-bold max-md:text-center'>Intern Dashboard</h1>
    </div>
    <div className='border-2 shadow-2xl shadow-blue-950  max-md:mx-10 flex flex-col space-y-2 border-yellow-300 bg-white text-black rounded-lg px-4 py-4 '>
        <h1 className='text-4xl font-bold text-blue-950'>Welcome Back {userData?.name} ,!</h1>
        <p className='font-semibold text-blue-950 text-xl'>Happy to see you again!!</p>
        <p className='font-semibold text-blue-950 text-xl'>Days Active:20</p>
    </div>
    <div>
      <h1 className='text-4xl font-bold max-md:text-center '>Your Referral Code</h1>
      
         <div  className='border-2 mt-8 w-fit shadow-2xl shadow-blue-950 flex flex-row  max-md:flex-col max-md:mx-10     space-x-5  border-yellow-300 bg-white text-black rounded-lg px-4 py-8 '>
        <div>
         <img src={referral} className='w-20 h-20' alt="referral" />
        </div>
        <div className='flex flex-col space-y-2'>
        <p className='font-semibold text-blue-950 text-xl'>Share this code to earn rewards</p>
        <p className='text-2xl font-bold text-blue-950'>{userData?.referral}</p>
        </div>
       </div>
       
    </div>
     <div className='flex flex-row max-md:flex-col max-md:space-y-8  max-md:items-center justify-between mt-12'>
      <button className='bg-white max-md:w-fit shadow-md shadow-orange-50 text-black font-sm font-bold px-2 py-2 rounded-2xl'>
       <h1>Total amount donated</h1>
       <span>{userData?.donation}</span>
      </button>
      <button className='bg-white  max-md:w-fit shadow-md shadow-orange-50  text-black font-sm font-bold px-2 py-2 rounded-2xl'>
         <h1>Total Rewards Earned</h1>
         <span>0</span>
      </button>
      <button className='bg-white max-md:w-fit shadow-md shadow-orange-50 text-black font-sm font-bold px-2 py-2 rounded-2xl'>
          <h1>Total fund raised</h1>
          <span>{localStorage.getItem("fund")}</span>
      </button>
     </div>
    </div>
   
    </>
  )
}

export default Dashboard
