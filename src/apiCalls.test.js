import React from 'react';
import { shallow, mount } from 'enzyme';
import { fetchSpecies, fetchHomeworld, fetchCharacterData, fetchMovies } from './apiCalls';


describe('apiCalls', () => {
  describe('fetchSpecies', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ 
          json: () => Promise.resolve({ name: 'Brady'}),
        });
      });
    });

    it('should be called with the correct URL', () => {
      fetchSpecies('https://test.com/api/v1/species/1');
      expect(window.fetch).toHaveBeenCalledWith('https://test.com/api/v1/species/1');
    });

    it('should return the name of the species', () => {
      expect(fetchSpecies('test.url.com')).resolves.toEqual('Brady');
    })
  });

  describe('fetchHomeworld', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve({ name: 'Earth', population: 3000 })
        });
      });
    });

    it('should be called with the correct url', () => {
      fetchHomeworld('https://swapi.com/api/v1/homeworld/1');
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.com/api/v1/homeworld/1');
    });

    it('should return an array containing name and population', () => {
      expect(fetchHomeworld('https://swapi.com/api/v1/homeworld/1')).resolves.toEqual(["Earth", 3000]);
    }); 
  });

  describe('fetchMovies', () => {
    const mockUrls = ['url1', 'url2'];
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ json: () => Promise.resolve({ name: 'first star wars'})
        });
      });
    });

    it('should be called with the correct url', () => {
      fetchHomeworld(['url1']);
      expect(window.fetch).toHaveBeenCalledWith(['url1']);
    });

    it('should map over each supplied url and return an array of films', () => {
      expect(fetchHomeworld(mockUrls)).resolves.toEqual(['first star wars', undefined]);
    });
  });

  describe('fetchCharactersData', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ json: () => Promise.resolve({
          films: ['url1', 'url2', 'url3'],
          homeworld: 'earth',
          name: 'brady',
          species: 'speciesUrl',
          })
        });
      });
    });

    it('should be called with the correct urls', () => {
       const mockCharacterUrls = ['char1', 'char2', 'char3'];
      fetchCharacterData(mockCharacterUrls);
      expect(window.fetch).toHaveBeenCalledWith('char1');
      expect(window.fetch).toHaveBeenCalledWith('char2');
      expect(window.fetch).toHaveBeenCalledWith('char3');
    });
  });
});