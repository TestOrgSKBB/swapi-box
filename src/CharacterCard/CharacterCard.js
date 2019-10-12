  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.scss'
import favoriteImg from '../images/favorite.png';
import activeFavoriteImg from '../images/active-favorite.png';

class Character extends Component {

  constructor(props) {
    super(props);
  }

  toggleFavorited = () => {
    const { name } = this.props.character;
    this.props.updateFavorite(name);
  }

  returnFilms = () => {
    const films = this.props.character.films;
    return films.map(film => <p>{film.title}</p>);
  }

  render() {
    const {name, homeworld, species, isFavorited} = this.props.character;

    return (
      <article className="character__cards">
        <h5>Name: {name}</h5>
        <h5>HomeWorld: {homeworld[0]}</h5>
        <h6>Population: {homeworld[1]}</h6>
        <h5>Species: {species}</h5>
        <div>
          <h6>Featured Films:</h6>
          <h5>{this.returnFilms()}</h5>
        </div>
        { !isFavorited && <img 
          onClick={this.toggleFavorited} 
          className='article__favorite-button' 
          src={favoriteImg} 
          alt='favorite button' /> }
        { isFavorited && <img 
          onClick={this.toggleFavorited} 
          className='article__favorite-button' 
          src={activeFavoriteImg} 
          alt='favorite button' /> }
        
      </article>
    );
  };
};

export default Character