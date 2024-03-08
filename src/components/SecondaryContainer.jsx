import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);

  return (
    <div className="bg-black">
    <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
     <MovieList title={"Popular"} movies={movies.popularMovies} />
     <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
     <MovieList title={"New Release"} movies={movies.nowPlayingMovies} />
      
    </div>

    <Footer/>

    </div>
  )
}

export default SecondaryContainer;