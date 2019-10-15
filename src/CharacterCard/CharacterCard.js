import React, { Component } from 'react';
import './CharacterCard.scss'
import favoriteImg from '../images/favorite.png';
import activeFavoriteImg from '../images/active-favorite.png';
import PropTypes from 'prop-types';

class Character extends Component {

  toggleFavorited = () => {
    const { name } = this.props.character;
    this.props.updateFavorite(name);
  }

  returnFilms = () => {
    const films = this.props.character.films;
    return films.map((film, i) => <p className="character__card--films" key={i}>{film.title}</p>);
  }

  render() {
    const {name, homeworld, species, isFavorited} = this.props.character;

    return (
      <article className="character__cards">
        <div className="favorite-button-container">
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
        </div>
        <h5 className="character__card--element">Name: <span className="character__card--info">{name}</span></h5>
        <h5 className="character__card--element">HomeWorld: <span className="character__card--info">{homeworld[0]}</span></h5>
        <h6 className="character__card--element">Population: <span className="character__card--info">{homeworld[1]}</span></h6>
        <h5 className="character__card--element">Species: <span className="character__card--info">{species}</span></h5>
        <div>
          <h6 className="character__card--element">Featured Films:</h6>
          <div className="character__card--div">
          {this.returnFilms()}
          </div>
        </div>
      </article>
    );
  };
};

Character.propTypes = {
  character: PropTypes.object,
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  isFavorited: PropTypes.bool,
  updateFavorite: PropTypes.func,
  films: PropTypes.array,
  toggleFavorited: PropTypes.func,
  returnFilms: PropTypes.func
}

export default Character;

