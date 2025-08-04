import React from 'react'
import { rewardData } from '../assets/assets'
import lock from '../assets/lock.png';
import unlock from '../assets/padlock-unlock.png';
function Reward() {
  return (
    <div className='mt-30'> 
       <h1 className='text-white font-bold text-4xl text-center'>Rewards and Achievements</h1>
      <div className='flex flex-col items-center justify-center space-y-10 mt-10 max-w-screen-xl mx-auto'>
        {rewardData.map((data)=>(
          <div className='border-1 flex hover:scale-105 flex-col space-y-2   px-4 py-8 bg-fuchsia-200 shadow-lg shadow-gray-700 w-[500px] h-[360px] max-md:w-[90%]  border-white rounded-lg '>
               <div>
                <img src={data.reward_icon} className='w-20 h-20' alt="" />
               </div>
              <div className='flex flex-row justify-between'>
                 <h1 className='font-bold text-2xl' >{data.name}</h1>
                 <img  className="w-10 h-10"  src={data.status==="unlocked"?unlock:lock} alt="status" />
              </div>
              <p className='text-sm font-semibold' >{data.description}</p>
              <div className='flex flex-row justify-between'>
                 <button>{data.status}</button>
                <p>{data.amount_required}</p>
              </div>
              <button className='bg-green-800  text-white px-2 py-2 w-fit rounded-lg'>{data.reward}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reward
