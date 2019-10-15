import React from 'react';
import $ from 'jquery';
import '../MovieContainer/MovieContainer.scss'
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

const MovieContainer = ( props ) => {
  $('.title').text('Movies')
  
  const displayMovies = props.movies.map( movie => {
    const {title , episode_id, release_date, characters, opening_crawl } = movie;
    const selectMovie = props.selectMovie;
    return <MovieCard 
      selectMovie={selectMovie} 
      title={title}
      id={episode_id} 
      episode_id={episode_id} 
      key={episode_id} 
      release_date={release_date} 
      characters={characters}
      opening_crawl={opening_crawl} 
    />
  });

  return (
    <section className="section__movie--container">
      {displayMovies}
    </section>
  )
 };
 
 MovieContainer.propTypes = {
  movies: PropTypes.array,
  selectMovie: PropTypes.func,
  title: PropTypes.string,
  episode_id: PropTypes.number,
  release_date: PropTypes.string,
  characters: PropTypes.array,
  opening_crawl: PropTypes.string
 };

export default MovieContainer;