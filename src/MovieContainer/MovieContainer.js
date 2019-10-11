import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ( props ) => {
  const displayMovies = props.movies.map( (movie, i) => {
    const {title , episode_id, release_date } = movie;
    return <MovieCard title={title} episode_id={episode_id} release_date={release_date} key={i} />
  });

  return (
    <>
      <h1>Movies</h1>
      {displayMovies}
    </>
  )
 }  


export default MovieContainer;