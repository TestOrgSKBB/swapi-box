import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  const mockSignOut = jest.fn()


  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

  // it('should call signOut on click', () => {
  //   wrapper.find('.button__sign-out').simulate('click');
  //   expect(mockSignOut).toHaveBeenCalled()
  // });

    it('should update the state', () => {
      wrapper.instance().updateState({name: 'obi wan'});
      expect(wrapper.state('name')).toEqual('obi wan');
    });
  })



