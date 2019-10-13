import React from 'react';
import $ from 'jquery';
import { Route, NavLink } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ( props ) => {
  console.log('CHARACTER PROPS', props)
  $('.title').text('Characters')
  const character = props.characters.map(character => <CharacterCard character={character} />)
  const opening_crawl = props.opening_crawl
  console.log('SCROLL', opening_crawl)
  return (
    <>
      <h1>{character}</h1>
      <h1>{opening_crawl}</h1>
    </>
  )
 }  


export default CharacterContainer;