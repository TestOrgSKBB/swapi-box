import React from 'react';
import MovieCard from '..MovieCard/MovieCard';

const MovieContainer = ({movies}) => {
  const movieInfo = movies.map(movie => {
    return <MovieCard 
      id={movie.episode_id}
      title= {movie.title}
      episode={movie.episode_id}
      year={movie.release_date}
      />
  })
}

export default MovieContainer;