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

  it('should not submit info if form is incomplete', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('name')).toEqual('');
    expect(wrapper.state('quote')).toEqual('');
    expect(wrapper.state('rank')).toEqual('');
    expect(mockUpdateState).not.toHaveBeenCalled();
  });

  it('should update name, quote, rank when submit button is clicked', () => {
    wrapper.setState({ isComplete: true });
    wrapper.find('button').simulate('click');
    expect(mockUpdateState).toHaveBeenCalled();
  })

  describe('handleChange', () => {
    it('should update state of particular info with input', () => {
      const event = { target: { name: 'name', value: 'obi' }};
      wrapper.instance().handleChange(event);
      expect(wrapper.state('name')).toEqual('obi');
      expect(wrapper.state('isComplete')).toEqual(true);
    });
  });

  describe('submitUserInfo', () => {
    it('should call updateState', () => {
      wrapper.setState({ isComplete: true});
      wrapper.find('button').simulate('click');
      expect(mockUpdateState).toHaveBeenCalled();
    });
  });

});