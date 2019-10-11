import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

  describe('updateState', () => {
    it('should update the state', () => {
      wrapper.instance().updateState({name: 'obi wan'});
      expect(wrapper.state('name')).toEqual('obi wan');
    });
  }); 
})


