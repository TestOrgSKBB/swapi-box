import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    const movies = [
        {
          episode_id: 2, 
          characters: [
            {name: 'Luke', isFavorited: false },
            {name: 'R2D2', isFavorited: false},
          ],
        }
      ];
    wrapper.setState({ 
      movies, 
      currentMovie: 2, 
      name: 'Luke', 
      quote: 'Star Wars', 
      rank: 'master', 
    });
  })

  it('should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });

    it('should update the state', () => {
      wrapper.instance().updateState(
        {
          name: 'obi wan',
          quote: 'hello',
          rank: 'master',
      });
      expect(wrapper.state('name')).toEqual('obi wan');
      expect(wrapper.state('quote')).toEqual('hello');
      expect(wrapper.state('rank')).toEqual('master');
    });

  describe('selectMovie', () => {
    it('should update state with current episode_id being viewed', () => {
      const closest = jest.fn().mockImplementation(() => {
        return {id: 4};
      })
      const mockEvent = { target: { closest }};
      wrapper.instance().selectMovie(mockEvent);
      expect(wrapper.state('currentMovie')).toEqual(4);
    });
  });

  describe('updateFavorite', () => {
    it('should toggle a characters favorite status for a particular movie', () => {
      wrapper.instance().updateFavorite('Luke');
      expect(wrapper.state('movies')[0].characters[0].isFavorited).toEqual(true);
      
    });
  });

  describe('returnFavoriteCharacters', () => {
    it('should return favorite characters from the current movie', () => {
      wrapper.instance().updateFavorite('Luke');
      const favorites = wrapper.instance().returnFavoriteCharacters();
      const expected = [{ name: 'Luke', isFavorited: true }];
      expect(favorites).toEqual(expected);
    });
  });

  describe('signOut', () => {
    it('should reset name, quote, and rank in state', () => {
      wrapper.instance().signOut();
      expect(wrapper.state('name')).toEqual("");
      expect(wrapper.state('quote')).toEqual("");
      expect(wrapper.state('rank')).toEqual("");
    });
  });
});

