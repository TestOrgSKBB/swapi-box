import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ( props ) => {
  
  const displayMovies = props.movies.map( movie => {
    const {title , episode_id, release_date, characters } = movie;
    return <MovieCard selectMovie={props.selectMovie} title={title} id={episode_id} key={episode_id} release_date={release_date} characters={characters} />
  });


  // const movieKeys = Object.keys(movies);
  // const displayMovies = movieKeys.map(movie => {
  //   const title = movies[movie].title;
  //   const episode_id = movies[movie].episode_id;
  //   const release_date = movies[movie].release_date;
  //   console.log(displayMovies);
  //   return <MovieCard title={title} episode_id={episode_id} release_date={release_date} />
  // });

  return (
    <>
      <h1>Movies</h1>
      {displayMovies}
    </>
  )
 }  


export default MovieContainer;