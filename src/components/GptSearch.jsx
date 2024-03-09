import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';





const GptSearch = () => {

  


  return (
    <div>
      <div className='absolute -z-10'>
  <img src={BG_URL} alt='Try Again'
  className="h-screen object-cover w-screen"
   />
  </div>

        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;