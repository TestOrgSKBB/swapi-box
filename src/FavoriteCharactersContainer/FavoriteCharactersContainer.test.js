import React from 'react';
import { shallow } from 'enzyme';
import FavoriteCharactersContainer from './FavoriteCharactersContainer';
import CharacterCard from '../CharacterCard/CharacterCard';

describe('FavoriteCharactersContainer', () => {
  let wrapper;
  const mockCharacters = [
    {name: 'Obi', isFavorited: true, homeplanet: 'mars'},
    {name: 'Yoda', isFavorited: true, homeplanet: 'earth'} 
  ];
  const mockUpdateFavorite = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<FavoriteCharactersContainer characters={mockCharacters} updateFavorite={mockUpdateFavorite} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});