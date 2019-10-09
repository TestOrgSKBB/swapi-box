import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('Form', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<Form />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})