import React from 'react'
import { LOGO } from '../utils/constants';
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';




const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  
 


  const handleSignOut = () => {
    
    signOut(auth)
      .then(() => {
        // Sign-out successful. 
        navigate("/");
       
      
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };


  return (
    <div className='absolute w-screen flex justify-between z-10 px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44 '
      src={LOGO}
      alt='Try Again'
      />
       
      {user && (
      <div className="flex p-2"> 
        <img alt="Try Again" className="w-12 h-12 mr-2 rounded-sm "
         src={user?.photoURL} />

        <button className='bg-red-500 rounded-lg px-2 py-1  font-bold text-white'
        onClick={handleSignOut} 
        >Sign Out
        </button>
      </div>
      )}   
    </div>
  )
}

export default Header;