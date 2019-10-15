import React from 'react';
import $ from 'jquery';
import '../MovieContainer/MovieContainer.scss'
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

const MovieContainer = ( props ) => {
  const sortedMovies = props.movies.sort((a,b) => a.episode_id - b.episode_id)
  const displayMovies = sortedMovies.map( movie => {
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
      <h1 className="movies-title">Movies</h1>
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