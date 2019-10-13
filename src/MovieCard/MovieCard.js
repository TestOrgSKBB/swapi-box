import React from 'react';
import './MovieCard.scss';
import { Route, NavLink } from 'react-router-dom'
// import MovieCard from '../MovieCard/MovieCard';

const MovieCard = (props) => {
  console.log('MOVIE CARD PROPS', props)
  const { title, release_date, id } = props;
  return (
    <section className="section__movie--card">
      <h2 className="movie__card--element">{title}</h2>
      <h3 className="movie__card--element">Episode {id}</h3>
      <h3 className="movie__card--element">{release_date}</h3>
      <NavLink className="movie__button--link" to={`movies/${id}/characters`}>
      <button className="button__view-characters" value={props.episode}>View Characters</button>
      </NavLink>
    </section>
  );
}


export default MovieCard