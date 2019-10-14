import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

class FavoriteCharactersContainer extends Component {

  displayFavoriteCharacters = () => {
    return this.props.characters.map( (character, i) => <CharacterCard character={character} updateFavorite={this.props.updateFavorite} key={i} />)
  }

  render() {
    const favoriteCharacters = this.displayFavoriteCharacters();
    const hasFavChars = favoriteCharacters.length > 0;
    const display = hasFavChars ? favoriteCharacters : <h1>No Favorite Characters</h1>;
    
    return (
      <>
        {display}
      </>
    );
  }
}

export default FavoriteCharactersContainer;