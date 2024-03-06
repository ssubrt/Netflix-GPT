import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';




const useMovieTrailer = (movieId) => {
  
    const trailerVideo = useSelector(store=> store.movies?.trailerVideo)
    const dispatch = useDispatch();
  
    //Fetch trailer video && updating the store with trailer video
    const getMovieTrailers = async()=>{
      
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
       API_OPTIONS);
       const json = await data.json();
      
  
       const filtertrailer = json.results.filter((video) => video.type==='Trailer');
       const officialTrailer = filtertrailer.length 
       ? filtertrailer[0]  
       : json.results[0];
     
       dispatch(addTrailerVideo(officialTrailer));
  
    }
  
    useEffect(()=>{
         getMovieTrailers();
    },[]);
};

export default useMovieTrailer;