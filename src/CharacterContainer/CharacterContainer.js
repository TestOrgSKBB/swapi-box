import React from 'react';
import $ from 'jquery';

import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ( props ) => {
  $('.title').text('Characters')
  const character = props.characters.map(character => <CharacterCard character={character} />)

  return (
    <>
      <h1>{character}</h1>
    </>
  )
 }  


export default CharacterContainer;