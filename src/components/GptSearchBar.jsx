import React, { useRef } from 'react';
import lang from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';







const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang);
    const searchText = useRef(null);

     const handleGptSearchClick = async()=>{
      console.log(searchText.current.value);
      //Make an APi call to Gpt Api and get movies results 

      const gptQuery = "Act as a Movie Recommendation system and suggest  some movies from query : "
      + searchText.current.value + ", only give me names of 5 movies , comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal,Koi Mil Gaya";
      
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(gptResult.choices);
     
       
      
    }




  return (
    <div className='pt-[10%] flex justify-center'>
      <form onSubmit={(e)=>e.preventDefault()}
      className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
          <input ref={searchText}
            type='text' className='p-4 m-4 col-span-9'
           placeholder={lang[langKey].gptSearchPlaceholder} />
         <button onClick={handleGptSearchClick}
         className='px-4 py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg'>
            {lang[langKey].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar