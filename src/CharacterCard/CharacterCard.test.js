import React from 'react';
import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('CharacterCard', () => {
  let wrapper;
  let mockUpdateFavorite = jest.fn()
  let mockToggleFavorited = jest.fn()
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
      toggleFavorited={mockToggleFavorited}
      />)
  });

  it('should match the snapshot with all correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleFavorite when button is clicked', () => {
    wrapper = mount(<CharacterCard
      key={100}
      updateFavorite = {mockUpdateFavorite}
      toggleFavorited = {mockToggleFavorited}
      character={mockCharacter}
      />)
      wrapper.find('.article__favorite-button').simulate('click');
      console.log(wrapper.props())
      expect(mockToggleFavorited).toHaveBeenCalled()
  })
})