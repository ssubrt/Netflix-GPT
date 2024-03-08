import React, { useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { checkValidateData } from '../utils/validate';
import { useRef } from 'react';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { USER_AVATAR } from "../utils/constants"
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage] = useState(null);

  const [isSignInForm,setIsSignInForm] = useState(true);
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR,
           
          })
            .then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }; 



  return ( 
    <div>
      <Header/> 
      <div className='absolute '>
      <img src={BG_URL} alt='Try Again'
       className="h-auto object-cover w-auto" />
      </div>

      <form onSubmit={(e) => e.preventDefault()}
       className=' w-3/12 absolute p-12 text-white bg-black mt-36 mx-auto right-0 left-0  rounded-lg bg-opacity-80 ' >
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          { !isSignInForm && (
            <input type='text' placeholder='Enter Name'
            className='p-4 my-4 w-full bg-gray-500 rounded-sm' />
          )

          }
        
        <input type='text' placeholder='Enter email id' ref={email}
        className='p-4 my-4 w-full bg-gray-500 rounded-sm' />
        <input type='password' placeholder='Enter Password' ref={password}
        className='p-4 my-4 w-full  bg-gray-500 rounded-sm' />
         
         <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 rounded-lg bg-red-700 w-full '
         onClick={handleButtonClick} >
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