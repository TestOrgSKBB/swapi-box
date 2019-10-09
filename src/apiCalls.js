
export const fetchData = () => {
  return fetch('https://swapi.co/api/films/')
    .then(data => data.json())
    .then(movieDetails => {
      let test = movieDetails.results;
      const movieData = movieDetails.results.map( movie => {
        return fetchMovieDetails(movie);
      });
      const characters = Promise.all(movieData)
      .then(characterInfo => {
        return test.map((movie, i) => {
          const {director, episode_id, opening_crawl, title} = movie;
          return {
            director,
            episode_id,
            opening_crawl,
            title,
            characters: characterInfo[i],
          };
        });
      });
      
      return characters;
    })
    .catch(error => console.log(error));
}

const fetchMovieDetails = movie => {
  const movieData = fetchCharacters(movie.characters);
  return movieData;
}

const fetchCharacters = characterUrls => {
  const characters = characterUrls.map( character => {
    return fetch(character).then(data => data.json()); 
  });
  return Promise.all(characters);
}






// characters: Array(18)
// 0: "https://swapi.co/api/people/1/"
// 1: "https://swapi.co/api/people/2/"
// 2: "https://swapi.co/api/people/3/"
// 3: "https://swapi.co/api/people/4/"
// 4: "https://swapi.co/api/people/5/"
// 5: "https://swapi.co/api/people/6/"
// 6: "https://swapi.co/api/people/7/"
// 7: "https://swapi.co/api/people/8/"
// 8: "https://swapi.co/api/people/9/"
// 9: "https://swapi.co/api/people/10/"
// 10: "https://swapi.co/api/people/12/"
// 11: "https://swapi.co/api/people/13/"
// 12: "https://swapi.co/api/people/14/"
// 13: "https://swapi.co/api/people/15/"
// 14: "https://swapi.co/api/people/16/"
// 15: "https://swapi.co/api/people/18/"
// 16: "https://swapi.co/api/people/19/"
// 17: "https://swapi.co/api/people/81/"
// length: 18
// __proto__: Array(0)
// created: "2014-12-10T14:23:31.880000Z"
// director: "George Lucas"
// edited: "2015-04-11T09:46:52.774897Z"
// episode_id: 4
// opening_crawl: "It is a period of civil war.
// ↵Rebel spaceships, striking
// ↵from a hidden base, have won
// ↵their first victory against
// ↵the evil Galactic Empire.
// ↵
// ↵During the battle, Rebel
// ↵spies managed to steal secret
// ↵plans to the Empire's
// ↵ultimate weapon, the DEATH
// ↵STAR, an armored space
// ↵station with enough power
// ↵to destroy an entire planet.
// ↵
// ↵Pursued by the Empire's
// ↵sinister agents, Princess
// ↵Leia races home aboard her
// ↵starship, custodian of the
// ↵stolen plans that can save her
// ↵people and restore
// ↵freedom to the galaxy...."
// planets: Array(3)
// 0: "https://swapi.co/api/planets/2/"
// 1: "https://swapi.co/api/planets/3/"
// 2: "https://swapi.co/api/planets/1/"
// length: 3
// __proto__: Array(0)
// producer: "Gary Kurtz, Rick McCallum"
// release_date: "1977-05-25"
// species: Array(5)
// 0: "https://swapi.co/api/species/5/"
// 1: "https://swapi.co/api/species/3/"
// 2: "https://swapi.co/api/species/2/"
// 3: "https://swapi.co/api/species/1/"
// 4: "https://swapi.co/api/species/4/"
// length: 5
// __proto__: Array(0)
// starships: Array(8)
// 0: "https://swapi.co/api/starships/2/"
// 1: "https://swapi.co/api/starships/3/"
// 2: "https://swapi.co/api/starships/5/"
// 3: "https://swapi.co/api/starships/9/"
// 4: "https://swapi.co/api/starships/10/"
// 5: "https://swapi.co/api/starships/11/"
// 6: "https://swapi.co/api/starships/12/"
// 7: "https://swapi.co/api/starships/13/"
// length: 8
// __proto__: Array(0)
// title: "A New Hope"
// url: "https://swapi.co/api/films/1/"
// vehicles: Array(4)
// 0: "https://swapi.co/api/vehicles/4/"
// 1: "https://swapi.co/api/vehicles/6/"
// 2: "https://swapi.co/api/vehicles/7/"
// 3: "https://swapi.co/api/vehicles/8/"

 