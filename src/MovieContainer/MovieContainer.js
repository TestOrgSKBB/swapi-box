import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ({movies}) => {
  const movieData = movies.map(movie => {
    return (<MovieCard 
      // id={movie.episode_id}
      // title= {movie.title}
      // episode={movie.episode_id}
      // year={movie.release_date}
      />
    )
  });

  
    return (
      <main>
        <header>
          <h1>
           Episodes
        </h1>
        </header>
        { movieData }
     </main>
    )
  }
  


export default MovieContainer;