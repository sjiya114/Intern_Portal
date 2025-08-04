import React from 'react'
import {motion} from 'framer-motion';
import reviewImage from '../assets/review.jpg';
function Review() {
  return (
    <>
    <div className='max-w-screen-xl mx-auto mt-20'>
        <h1 className="text-white   text-center font-bold text-4xl">See What Others Say</h1>
    </div>
    <div className='mt-20 mb-10   max-md:mb-30 max-w-screen-xl mx-auto flex items-center justify-center' >
    
      <div className='flex flex-row max-md:flex-col max-md:w-[80%] max-md:mt-20 shadow-lg shadow-white shadow-equal-spread  absolute w-1/2 bg-black space-x-4 border- border-1 rouwhitended-lg'>
        <img src={reviewImage} className='w-full h-100 rounded-lg' alt="review" />
        <div className='text-white px-4 flex flex-col max-md:py-6 space-y-10 items-center justify-center'>
          <p>⭐⭐⭐⭐⭐</p>
          <p className='text-sm font-semibold'>Interwala made my internship search easy and rewarding with their user-friendly dashboard and referral system!</p>
        </div>
      </div>
      <motion.div  whileHover={{rotate:180}}   className='w-[60%] rounded-lg h-102 hover:rotate-180 shadow-md shadow-white'>
            
      </motion.div>
    </div>
    </>
  )
}

export default Review
