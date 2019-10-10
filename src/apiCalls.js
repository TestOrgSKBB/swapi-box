export const fetchData = (movieUrls) => {
  return fetch(movieUrls)
    .then(data => data.json())
    .then(movies => {
      const movieData = movies.results.map(movie => {
        const { characters, opening_crawl, release_date, title } = movie;
        return fetchCharacters(characters)
          .then(characters => ({title, release_date, opening_crawl, characters}))
      })
      return Promise.all(movieData);
    })
  }

const fetchCharacters = (characters) => {
  const charactersData = characters.map(character => {
    return fetch(character)
    .then(data => data.json())
    .then(character => {
      const { films, homeworld, name, species } = character;
      return fetchMovies(films)
        .then(films => ({name, films, species, homeworld}));
    })
    .then(character => {
      const { films, homeworld, name, species } = character;
      return fetchHomeworld(homeworld)
        .then(homeworld => ({name, films, species, homeworld}));
    })
    .then(character => {
      const {films, homeworld, name, species } = character
      return fetchSpecies(species)
        .then(species => ({ name, films, species, homeworld }));
    })
  })
  return Promise.all(charactersData);
}

const fetchMovies = (filmUrls) => {
  const movieData = filmUrls.map(film => {
    return fetch(film)
      .then(res => res.json())
      .then(film => film)
  })
  return Promise.all(movieData);
}

const fetchHomeworld = (homeworld) => {
  return fetch(homeworld)
    .then(res => res.json())
    .then(homeworld => {
      const { name, population } = homeworld
      return [name, population];
    })
}

const fetchSpecies = (species) => {
    return fetch(species)
      .then(res => res.json())
      .then(species => {
        const { name } = species;
        return name;
      })
      .catch(err => console.log(`Error fetching species: ${err}`));
}


 