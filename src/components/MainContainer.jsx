import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';



const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) return;
    


    //for trailer we want one movie at a time
    const mainMovie = movies[0];
    

    const{original_title,overview,id} = mainMovie;


  return (
    <div className="pt-[30%] bg-black md:pt-0">
     <VideoTitle title={original_title} overview={overview} />
     <VideoBackground movieId={id} />

    </div>
  )
}

export default MainContainer;