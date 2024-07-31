import React from 'react'
import face from "./../../assets/avataaars.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <>
    <div className='flex justify-center items-center h-screen backGround'>
      <div className=' p-4 text-center'>
        <img src={face} alt="face" className='w-full' />
        <h1 className='text-white'>START FRAMEWORK</h1>
        <div className=' flex flex-row justify-center items-center mb-3'>
          <span className='w-20 h-1 bg-white'></span>
          <FontAwesomeIcon icon={faStar} className='text-white pl-4 pr-4'/>
          <span className='w-20 h-1 bg-white'></span>
        </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div> 
    </div>

   
      
      
    </>
  )
}
