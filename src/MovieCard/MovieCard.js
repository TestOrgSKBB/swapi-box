import React from 'react';
import './MovieCard.scss';
import { Route, NavLink } from 'react-router-dom'
// import MovieCard from '../MovieCard/MovieCard';

const MovieCard = (props) => {
  const { title, release_date, episode_id } = props;
  return (
    <section>
      <h2>{title}</h2>
      <h3>{episode_id}</h3>
      <h3>{release_date}</h3>
      <NavLink className="movie__button--link" to='/movies/3'>
      <button value={props.episode} onClick={event => props.selectMovie(event.target.value)}>>View Characters</button>
      </NavLink>
    </section>
  );
}


export default MovieCard