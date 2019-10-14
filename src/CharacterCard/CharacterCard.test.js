import React from 'react';
import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('CharacterCard', () => {
  let wrapper;
  const mockUpdateFavorite = jest.fn()
  const mockToggleFavorited = jest.fn()
  const mockCharacter = {
    films:['Tv: The Movie', 'A Movie About Musicals'],
    homeworld: 'Earth',
    name: 'Pants',
    species: 'Dog'
  }

  beforeEach(() => {
    wrapper = shallow(<CharacterCard
      key={100}
      character={mockCharacter}
      updateFavorite={mockUpdateFavorite}
      />)
  });

  it('should match the snapshot with all correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });

describe('toggleFavorites', () => {
  it('should call updateFavorite', () => {
    wrapper = mount(<CharacterCard
      key={100}
      updateFavorite = {mockUpdateFavorite}
      toggleFavorited = {mockToggleFavorited}
      character={mockCharacter}
      />)
      wrapper.find('.article__favorite-button').simulate('click');
      expect(mockUpdateFavorite).toHaveBeenCalled()
    })
  })
})
