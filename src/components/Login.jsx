import React, { useState } from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { checkValidateData } from '../utils/validate';
import { useRef } from 'react';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage] = useState(null);

  const [isSignInForm,setIsSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonCLick = ()=>{
    //Validate the form data
   
    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;
      

    //Sign Up Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
          }).then(() => {
            // Profile updated!
            // ...
            const {uid,email,displayName,photoURL} = auth.currentUser;
        // ...
        dispatch(
          addUser({
            uid:uid,email,
            displayName: displayName, 
            photoURL: photoURL
          }));
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          
          console.log(user);
       
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" +  errorMessage);
          // ..
        });
    }
    
    else {
      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +  errorMessage);
  });

    }




  }  



  return (
    <div>
      <Header/> 
      <div className='absolute '>
      <img src={BG_URL} alt='Try Again'
       className='h-screen w-screen' />
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
         onClick={handleButtonCLick} >
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