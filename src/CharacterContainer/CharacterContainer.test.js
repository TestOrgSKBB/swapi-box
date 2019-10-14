  
import React from 'react';
import CharacterContainer from './CharacterContainer';
import { shallow } from 'enzyme';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('CharacterContainer', () => {
  let wrapper
  
  it('should match the snapshot with all correct data', () => {
    wrapper =
      shallow(<CharacterContainer
        characters={[]}
        />)
        expect(wrapper).toMatchSnapshot()
      })
})