import React from 'react';
import './MovieCard.scss';
// import MovieCard from '../MovieCard/MovieCard';

const MovieCard = (props) => {
  const { title, release_date, episode_id } = props;
  return (
    <section>
      <h2>{title}</h2>
      <h3>{episode_id}</h3>
      <h3>{release_date}</h3>
      <button>View Characters</button>
    </section>
  );
}


export default MovieCard