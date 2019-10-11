  
import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.scss'

const Character = (props) => {
  console.log(props)
  let { films, homeworld, name, species } = props.character
  if(species === undefined) {
    species = 'Species Unknown'
  }
  console.log(films, 'FILMSSSS')
  let characterFilms = films.map(film => <p>{film.title}</p>)

  return (
    <article className="character__cards">
      <h5>Name: {name}</h5>
      <h5>HomeWorld: {homeworld[0]}</h5>
      <h6>Population: {homeworld[1]}</h6>
      <h5>Species: {species}</h5>
      <div>
        <h6>Featured Films:</h6>
        <h5>{characterFilms}</h5>
      </div>
    </article>
  )
}

export default Character