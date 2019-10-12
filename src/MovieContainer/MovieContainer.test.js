import React from 'react';
import { shallow } from 'enzyme'
import MovieContainer from './MovieContainer';
import MovieCard from '../MovieCard/MovieCard';

describe('MovieContainer', () => {
  let wrapper;
  const movies = [{
    title: 'Great Movie',
    episode_id: 4,
    release_date: '1999/04/20', 
  },
  {
    title: 'First Star Wars',
    episode_id: 1,
    release_date: '2050/01/01',
  }];

  beforeEach(() => {
    wrapper = shallow(<MovieContainer movies={movies} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});