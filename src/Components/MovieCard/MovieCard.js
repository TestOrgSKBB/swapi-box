import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const { title, release_date, id, episode_id, selectMovie } = props;
  return (
    <section className="section__movie--card" id={episode_id} >
      <h2 className="movie__card--element movie__element--title">{title}</h2>
      <h3 className="movie__card--element">Episode {id}</h3>
      <h3 className="movie__card--element">{release_date}</h3>
      <Link className="movie__button--link" to={`movies/${id}/characters`}>
        <button 
          className="button_view-characters" 
          value={props.episode} 
          onClick={selectMovie}
        >
          View Characters
        </button>
      </Link>
    </section>
  );
};

MovieCard.propTypes = {
  characters: PropTypes.array,
  episode_id: PropTypes.number,
  id: PropTypes.number,
  opening_crawl: PropTypes.string,
  release_date: PropTypes.string,
  selectMovie: PropTypes.func,
  title: PropTypes.string
};


export default MovieCard