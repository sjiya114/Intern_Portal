import React from 'react'

function Footer() {
  return (
     <div className='   flex flex-col mt-20 w-full  text-gray-300 '  >
     <div className='w-full flex flex-col border-b-1 border-gray-400 py-10 justify-center items-center ' >
       <h1 className=' font-semibold text-4xl tracking-tight  '> InternWala</h1>
       <p className='text-lg pt-2 text-center font-semibold mt-2'>Bridging the gap between learning and doing.</p>
    </div>
    <div className='flex flex-row w-full items-center justify-center space-x-4'>
      <p className='py-5 text-sm'>Copyright © 2025 - InternWala</p>
      <button onClick={()=>{scroll(0,0,0)}} className='bg-yellow-300 mr-0 rounded-full cursor-pointer px-3 py-2'> <img src="" className='w-6 h-6' alt="" /></button>
   </div>  
    </div>
  )
}

export default Footer
