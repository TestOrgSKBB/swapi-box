import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ( props ) => {
  $('.title').text('Characters');
  const displayCharacters = props.characters.map((character, i) => <CharacterCard character={character} updateFavorite={props.updateFavorite} key={i} />)

  return (
    <>
      <NavLink to='/movies/favorite-characters' >
        <button>View Favorites</button>
      </NavLink>
      {displayCharacters}
    </>
  )
 }  


export default CharacterContainer;