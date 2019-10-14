import React from 'react';
import './MovieCard.scss';
import { NavLink } from 'react-router-dom'

const MovieCard = (props) => {
  const { title, release_date, id, episode_id, selectMovie } = props;
  return (
    <section className="section__movie--card" id={episode_id} >
      <h2 className="movie__card--element">{title}</h2>
      <h3 className="movie__card--element">Episode {id}</h3>
      <h3 className="movie__card--element">{release_date}</h3>
      <NavLink className="movie__button--link" to={`movies/${id}/characters`}>
        <button 
          className="button_view-characters" 
          value={props.episode} 
          onClick={selectMovie}
        >
          View Characters
        </button>
      </NavLink>
    </section>
  );
}


export default MovieCard