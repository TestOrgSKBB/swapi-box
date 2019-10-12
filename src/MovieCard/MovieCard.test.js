import React from 'react';
import { shallow } from 'enzyme'
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  let wrapper;
  const title = 'Star Wars: A New Hope';
  const release_date = '2020/01/01';
  const episode_id = 1;

  beforeEach(() => {
    wrapper = shallow(<MovieCard title={title} release_date={release_date} episode_id={episode_id} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});