import React from 'react';
import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('CharacterCard', () => {
  let wrapper;
  let mockUpdateFavorite = jest.fn()
  let mockToggleFavorited = jest.fn()
  const films = ['Tv: The Movie', 'A Movie About Musicals'];
  const mockCharacter = {
    films,
    homeworld: 'Earth',
    name: 'Pants',
    species: 'Dog',
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

  describe('toggleFavorited', () => {
    it('should toggle status of isFavorited when star icon is clicked', () => {
      wrapper.find('img').simulate('click');
      expect(mockUpdateFavorite).toHaveBeenCalledWith('Pants');
    });
  });

  describe('returnFilms', () => {
    it('should return the films a character is in, in a <p> tag.', () => {
      const films = wrapper.instance().returnFilms();
      expect(films.length).toEqual(2);
    })
  });
});