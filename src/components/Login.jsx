import React, { useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);
  
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  };



  return (
    <div>
      <Header/> 
      <div className='absolute'>
      <img src={BG_URL} alt='Try Again' />
      </div>

      <form className=' w-3/12 absolute p-12 text-white bg-black mt-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80 ' >
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          { !isSignInForm && (
            <input type='text' placeholder='Enter Name'
            className='p-4 my-4 w-full bg-gray-500 rounded-sm' />
          )

          }
        
        <input type='text' placeholder='Enter email id'
        className='p-4 my-4 w-full bg-gray-500 rounded-sm' />
        <input type='password' placeholder='Enter Password'
        className='p-4 my-4 w-full  bg-gray-500 rounded-sm' />

        <button className='p-4 my-6 rounded-lg bg-red-700 w-full ' >
        {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        { isSignInForm ? "New to Netflix ? Sign Up Now"
       : "Already registered ? Sign in Now" }
        </p>
      </form>
      
      

    </div>
  )
}

export default Login;