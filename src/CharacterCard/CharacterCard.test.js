import React from 'react';
import { shallow, mount } from 'enzyme';
import CharacterCard from './CharacterCard';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('CharacterCard', () => {
  let wrapper;
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
      />)
  });

  it('Should match the snapshot with all correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });
})