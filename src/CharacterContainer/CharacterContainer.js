import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import CharacterCard from '../CharacterCard/CharacterCard';
import '../CharacterContainer/CharacterContainer.scss'

const CharacterContainer = ( props ) => {
  $('.title').text('Characters');
  const displayCharacters = props.characters.slice(0, 10).map((character, i) => 
    <CharacterCard 
      character={character} 
      updateFavorite={props.updateFavorite} 
      key={i} 
    />);

  const opening_crawl = props.opening_crawl;

  return (
    <section className="section__characters">
      <NavLink to='/movies/favorite-characters' >
        <button className="button__view-favorites">View Favorites ({props.numFavorites})</button>
      </NavLink>
      {displayCharacters}
      <div className="star-wars">
        <div className="div__crawl">
        <p>{opening_crawl}</p>
        </div>
      </div>
    </section>
  );
 }; 

export default CharacterContainer;