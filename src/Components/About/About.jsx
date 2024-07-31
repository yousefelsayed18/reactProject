import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function About() {
  return (
    <div className='bg-[#1ABC9C] about'>
   
      <div className='pos'>
      <div className='flex justify-center items-center text-center'>
        <h1 className='text-white fontSize'>
        ABOUT COMPONENT
        </h1>

      </div>
      <div className=' flex flex-row justify-center items-center mb-3'>
          <span className='w-20 h-1 bg-white'></span>
          <FontAwesomeIcon icon={faStar} className='text-white pl-4 pr-4'/>
          <span className='w-20 h-1 bg-white'></span>
        </div>
        <div className=' text-white grid md:grid-cols-2 m-auto'>
          <div className='m-auto'>
            <br />
            <p>Freelancer is a free bootstrap theme created by Route. The download includes</p>
            <p>the complete source files including HTML, CSS, and JavaScript as well as</p>
            <p>optional SASS stylesheets for easy customization.</p>
          </div>
          
          <div className='m-auto'>
            <br />
            <p>Freelancer is a free bootstrap theme created by Route. The download includes</p>
            <p>the complete source files including HTML, CSS, and JavaScript as well as</p>
            <p>optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>

       
    </div>  
    
  )
}
