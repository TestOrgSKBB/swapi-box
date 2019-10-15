  
import React from 'react';
import CharacterContainer from './CharacterContainer';
import { shallow } from 'enzyme';

describe('CharacterContainer', () => {
  let wrapper;
  const characters = [
    {
      films:['A Film', 'Another Film', 'And another'],
      homeworld: 'Earth',
      name: 'A name',
      population: '2000',
      species:'human'
    },
    {
      films:['A Film 2', 'Another Film 2', 'And another 2'],
      homeworld: 'Earth 2',
      name: 'A name 2',
      population: '2000 2',
      species:'human 2'
    },
    {
      films:['A Film 3', 'Another Film 3', 'And another 3'],
      homeworld: 'Earth 3',
      name: 'A name 3',
      population: '2000 3',
      species:'human 3'
    }
  ];

 beforeEach(() => {
   wrapper = shallow(<CharacterContainer
    characters={characters}
  />);
 });

 it('should match the snapshot with the correct data', () => {
   expect(wrapper).toMatchSnapshot();
 });
 
});