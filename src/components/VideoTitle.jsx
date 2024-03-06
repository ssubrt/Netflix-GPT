import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";


const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%]   px-24 absolute text-white bg-gradient-to-r from-black' >
      <h1 className='text-6xl font-bold' >{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p> 
      <div className='flex'>
        <button className=' bg-gray-300 text-black  text-lg py-4 px-12  rounded-lg flex justify-center items-center hover:bg-gray-500 ' >
          < FaPlay /><p>Play</p>
        </button>
        <button className='mx-2 bg-gray-300 text-black  text-lg py-4 px-12  rounded-lg flex justify-center items-center  hover:bg-gray-500  '>
        <IoIosInformationCircle /><p>More Info</p></button>
      </div>
    </div>
  );
}

export default VideoTitle;