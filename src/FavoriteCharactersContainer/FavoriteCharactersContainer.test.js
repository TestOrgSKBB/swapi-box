import React from 'react';
import FavoriteCharactersContainer from './FavoriteCharactersContainer';
import CharacterCard from '../CharacterCard/CharacterCard';

import { shallow } from 'enzyme';

describe('FavoriteCharactersContainer', () => {
  let wrapper
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
  
 beforeEach(() => {
  wrapper= shallow(<FavoriteCharactersContainer 
   key={100}
   characters={mockCharacters}
   updateFavorite={mockUpdateFavorite}
    />)
  })


  //  wrapper = shallow(<CharacterCard
  //   characters={[{
  //     films:['A Film', 'Another Film', 'And another'],
  //     homeworld: 'Earth',
  //     name: 'A name',
  //     population: '2000',
  //     species:'human'
  //   },
  //   {
  //     films:['A Film 2', 'Another Film 2', 'And another 2'],
  //     homeworld: 'Earth 2',
  //     name: 'A name 2',
  //     population: '2000 2',
  //     species:'human 2'
  //   },
  //   {
  //     films:['A Film 3', 'Another Film 3', 'And another 3'],
  //     homeworld: 'Earth 3',
  //     name: 'A name 3',
  //     population: '2000 3',
  //     species:'human 3'
  //   }]}
  // />)
  it('should match the snapshot with the correct data', () => {
    expect(wrapper).toMatchSnapshot();
  })
 });

