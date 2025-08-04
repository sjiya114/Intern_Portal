import React from 'react'
import reward1 from '../assets/reward1.png';
import reward2 from '../assets/reward2.png';
import reward3 from '../assets/reward3.png';
import reward4 from '../assets/reward4.png';
import reward6 from '../assets/reward6.png';
import reward7 from '../assets/reward7.png';

function Gallery() {
  return (
    <>
      <div className='text-white mt-30 max-w-screen-xl mx-auto '>
        <h1 className='text-center font-semibold text-4xl my-2 font-serif '  >Gallery</h1>
        <p className='text-center font-normal text-2xl my-2 font-serif  leading-tight ' >Explore our intern portal features and unlock amazing rewards</p>
      </div>
      <div className='  mt-20 flex flex-row max-md:flex-col max-md:mx-6 max-md:space-y-3 space-x-4 scroll-smooth flex-wrap justify-center items-center max-w-screen-xl  mx-auto' >
         <img src={reward2} alt="image" className='w-100 h-180 rounded-xl hover:scale-120  shadow-2xl shadow-gray-600 ' />
         <div className='space-y-2'>
           <img src={reward1} alt="image" className='w-150 h-90 rounded-xl hover:scale-120  shadow-2xl shadow-gray-600 ' />
            <img src={reward6} alt="image" className='w-150 h-90 rounded-xl hover:scale-120  shadow-2xl shadow-gray-600 ' />
         </div>
       
        <img src={reward3} alt="image" className='w-100 h-180 rounded-xl hover:scale-120  shadow-2xl shadow-gray-600 ' />
        <div  className='space-y-2'>
            <img src={reward4} alt="image" className='w-150 h-100 rounded-xl hover:scale-120  shadow-2xl shadow-gray-600 ' />
       
        <img src={reward7} alt="image" className='w-150 h-100 rounded-xl hover:scale-120  shadow-2xl shadow-gray-600 ' />
        </div>
        
      </div>
    </>
  )
}

export default Gallery
