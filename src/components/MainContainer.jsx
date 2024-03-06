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
    <div>
     <VideoTitle title={original_title} overview={overview} />
     <VideoBackground movieId={id} />

    </div>
  )
}

export default MainContainer;