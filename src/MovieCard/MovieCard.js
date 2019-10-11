import React from 'react';
import './MovieCard.scss';
import { Route, NavLink } from 'react-router-dom'
// import MovieCard from '../MovieCard/MovieCard';

const MovieCard = (props) => {
  const { title, release_date, id } = props;
  return (
    <section>
      <h2>{title}</h2>
      <h3>{id}</h3>
      <h3>{release_date}</h3>
      <NavLink className="movie__button--link" to={`movies/${id}/characters`}>
      <button value={props.episode}>>View Characters</button>
      </NavLink>
    </section>
  );
}


export default MovieCard