import React from 'react';
import FavoriteCharactersContainer from './FavoriteCharactersContainer';
import CharacterCard from '../CharacterCard/CharacterCard';

import { shallow } from 'enzyme';

describe('FavoriteCharactersContainer', () => {
  let wrapperHappy
  let wrapperSad
  const mockUpdateFavorite = jest.fn()
  let mockCharacters = [
    {
      films:['A Film', 'Another Film', 'And another'],
      homeworld: 'Earth',
      name: 'A name',
      population: '2000',
      species:'human'
    }
  ]
  let mockNoCharacters = []
  
 beforeEach(() => {
  wrapperHappy= shallow(<FavoriteCharactersContainer 
   key={100}
   characters={mockCharacters}
   updateFavorite={mockUpdateFavorite}
    />)
  wrapperSad=shallow(<FavoriteCharactersContainer 
    key={100}
    characters={mockNoCharacters}
    updateFavorite={mockUpdateFavorite}
     />)
  })

    it('should match the snapshot with the correct data', () => {
      expect(wrapperHappy).toMatchSnapshot();
    })

    it('should match the snapshot with the correct data', () => {
      expect(wrapperSad).toMatchSnapshot();
    })


 });

