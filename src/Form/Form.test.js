import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('Form', () => {
  let wrapper
  const mockUpdateState = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Form updateState={mockUpdateState} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('handleChange', () => {
    it('should update state of particular info with input', () => {
      const event = { target: { name: 'name', value: 'obi' }};
      wrapper.instance().handleChange(event);
      expect(wrapper.state('name')).toEqual('obi');
    })
  })

  describe('submitUserInfo', () => {
    it('should call updateState', () => {
      wrapper.find('button').simulate('click');
      expect(mockUpdateState).toHaveBeenCalled();
    });
  });

});