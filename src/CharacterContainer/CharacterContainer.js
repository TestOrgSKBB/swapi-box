import React from 'react';
import $ from 'jquery';
import { Route, NavLink } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ( props ) => {
  console.log('CHARACTER PROPS', props)
  $('.title').text('Characters')
  const character = props.characters.map(character => <CharacterCard character={character} />)
  const scroll = props.opening_scroll
  console.log('SCROLL', scroll)
  return (
    <>
      <h1>{character}</h1>
      <h1>{scroll}</h1>
    </>
  )
 }  


export default CharacterContainer;