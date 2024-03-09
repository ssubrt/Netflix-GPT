import React, { useRef } from 'react';
import lang from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';








const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang);
    const searchText = useRef(null);

     




  return (
    <div className='pt-[10%] flex justify-center'>
      <form onSubmit={(e)=>e.preventDefault()}
      className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
          <input ref={searchText}
            type='text' className='p-4 m-4 col-span-9'
           placeholder={lang[langKey].gptSearchPlaceholder} />
         <button 
         className='px-4 py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg'>
            {lang[langKey].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar