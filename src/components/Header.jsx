import React from 'react'
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from '../utils/constants';
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';




const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  
 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
    
  }, []);


  const handleGptSearchClick =()=>{
    //Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute w-full flex justify-between z-10 px-8 py-2 bg-gradient-to-b from-gray-700'>
      <img className='w-44 '
      src={LOGO}
      alt='Try Again'
      />
       
      {user && (
      <div className="flex p-2">
        <select className='p-2 bg-gray-900 text-white rounded-sm m-2'>
          {SUPPORTED_LANG.map((lang)=>  (
          <option  key={lang.identifier} 
          value={lang.identifier}>{lang.name}</option>
          ))

          }
         
          </select> 
      <button onClick={handleGptSearchClick}
       className='py-2 px-4 mx-4 my-2 rounded-lg bg-purple-800 text-white '>
        GPT Search</button>
        <img  
         className="w-12 h-12 mr-2 rounded-sm "
         src={USER_AVATAR} alt="Try Again"/>

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