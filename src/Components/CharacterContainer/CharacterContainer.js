import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';
import '../CharacterContainer/CharacterContainer.scss';
import PropTypes from 'prop-types';
import backImage from '../../images/back.png'

const CharacterContainer = ( props ) => {
  // $('.title').text('Characters');
  const displayCharacters = props.characters.slice(0, 10).map((character, i) => 
    <CharacterCard 
      character={character} 
      updateFavorite={props.updateFavorite} 
      key={i} 
    />);

  const opening_crawl = props.opening_crawl;

  return (
    <>
      <h1 className="character-title">Characters</h1>
      <Link to='/movies'>
        <img className="button__back" src={backImage} alt="back button"/>
      </Link>
      <Link to='/movies/favorite-characters' >
        <button className="button__view-favorites">View Favorites ({props.numFavorites})</button>
      </Link>
      <section className="section__characters">
        {displayCharacters}
        <div className="star-wars">
          <div className="div__crawl">
          <p>{opening_crawl}</p>
          </div>
        </div>
      </section>
    </>
  );
 }; 

CharacterContainer.propTypes = {
  characters: PropTypes.array,
  numFavorites: PropTypes.number,
  opening_crawl: PropTypes.string,
  updateFavorite: PropTypes.func,
  name: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  handleFavorite: PropTypes.func
 };

export default CharacterContainer;