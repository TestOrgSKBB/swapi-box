import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ( props ) => {
console.log('character props', props)
  const character = props.characters.map(character => <CharacterCard character={character} />)

  return (
    <>
      <h1>Character!</h1>
      <h1>{character}</h1>
    </>
  )
 }  


export default CharacterContainer;