import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import jQuery from 'jquery';
export default function Contact() {
  function display(){
    let inputOne=document.getElementById('name');
    let inputTow=document.getElementById('email');
    let inputThree=document.getElementById('age');
    let inputFour=document.getElementById('password');
    let allInputs=[
      inputOne,inputTow,inputThree,inputFour
    ]
    for(let i =0;i<allInputs.length;i++){
      if(allInputs[i].value!=''){
        allInputs[i].closest('div').classList.add('group')
      }
      if(allInputs[i].value==''){
        allInputs[i].closest('div').classList.remove('group')
      }
    }
    // if(inputOne.value!=''){
    //   inputOne.closest('div').classList.add('group')
   
    // }
    // if(inputOne.value==''){
    //   inputOne.closest('div').classList.remove('group')
    // }
  }
 
  return (
    <>
      <div className='contact'>
        <div className=' container'>
          <h1 className='text-center cont'>CONTACT SECTION</h1>

          <div className=' flex flex-row justify-center items-center mb-3'>
            <span className='w-20 h-1 bg-black'></span>
            <FontAwesomeIcon icon={faStar} className='text-black pl-4 pr-4' />
            <span className='w-20 h-1 bg-black'></span>

          </div>
          <div className="flex items-center justify-center min-h-screen inputs">
            <div className="space-y-9 w-1/2">
              <div className=' relative flex flex-col '>
                <label htmlFor="name" className=' relative top-[32px] group-focus-within:top-0 transition-all duration-[0.7s] text-green-500'>userName :</label>
                <input
                  className="block w-full px-4 py-2 text-base texgray-700 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent relative z-[99]"
                  type="text"
                  placeholder="userName"
                  id='name'
                  onChange={ display}

                  
                />
              </div>
              <div className=' relative flex flex-col '>
                <label htmlFor="email" className=' relative top-[32px] group-focus-within:top-0 transition-all duration-[0.7s] text-green-500'>userEmail :</label>
                <input
                  className="block w-full px-4 py-2 text-base texgray-700 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent relative z-[99]"
                  type="text"
                  placeholder="userEmail"
                  id='email'
                  onChange={ display}

                  
                />
              </div>
              <div className=' relative flex flex-col '>
                <label htmlFor="age" className=' relative top-[32px] group-focus-within:top-0 transition-all duration-[0.7s] text-green-500'>userAge :</label>
                <input
                  className="block w-full px-4 py-2 text-base texgray-700 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent relative z-[99]"
                  type="text"
                  placeholder="userAge"
                  id='age'
                  onChange={ display}

                  
                />
              </div>
              <div className=' relative flex flex-col '>
                <label htmlFor="password" className=' relative top-[32px] group-focus-within:top-0 transition-all duration-[0.7s] text-green-500'>userPassword :</label>
                <input
                  className="block w-full px-4 py-2 text-base texgray-700 bg-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent relative z-[99]"
                  type="password"
                  placeholder="userPassword"
                  id='password'
                  onChange={ display}

                  
                />
              </div>

              <button
                className="w-1/2 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                type="button"
              >
                Submit
              </button>      </div>
          </div>



        </div>
      </div>

    </>
  )
}
