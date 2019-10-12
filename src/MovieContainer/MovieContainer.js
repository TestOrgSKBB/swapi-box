import React from 'react';
import $ from 'jquery';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ( props ) => {
  $('.title').text('Movies')
  const displayMovies = props.movies.map( movie => {

    const {title , episode_id, release_date, characters } = movie;
    return <MovieCard selectMovie={props.selectMovie} title={title} id={episode_id} key={episode_id} release_date={release_date} characters={characters} />
  });

  return (
    <>
      {displayMovies}
    </>
  )
 }  


export default MovieContainer;