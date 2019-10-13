import React from 'react';
import $ from 'jquery';

import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ( props ) => {
  $('.title').text('Characters')
  const displayCharacters = props.characters.map((character, i) => <CharacterCard character={character} updateFavorite={props.updateFavorite} key={i} />)

  return (
    <>
      {displayCharacters}
    </>
  )
 }  


export default CharacterContainer;