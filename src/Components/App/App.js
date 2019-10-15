import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { Route, NavLink } from 'react-router-dom';
import { fetchData } from '../../apiCalls';
import FavoriteCharactersContainer from '../FavoriteCharactersContainer/FavoriteCharactersContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import MovieContainer from '../MovieContainer/MovieContainer';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      isLoading: true,
      name: '',
      quote: '',
      rank: '',
      currentMovie: null,
    }
  };

  componentDidMount = () => {
    if(localStorage.getItem('movies')) {
      let movies = localStorage.getItem('movies');
      movies = JSON.parse(movies);
      this.setState({ movies, isLoading: false });
    } else {
      fetchData()
        .then(data => {
          return data;
        })
        .then(movies => {
          this.setState({ movies , isLoading: false})
          const stringyMovies = JSON.stringify(movies);
          localStorage.setItem('movies', stringyMovies);
        })
        .catch(error => console.log(error));
    }
  };

  updateState = (statesObj) => {
    this.setState(statesObj);
  }

  // sortMovies = (movies) => {
  //   const sortedMovies = movies.sort((a, b) => {
  //     return a.episode_id - b.episode_id
  //   })
  //   console.log('movies in app', movies)
  //   console.log('sorted in app', sortedMovies)
  //   this.setState({movies: sortedMovies})
  // };

  selectMovie = e => {
    const episode_id = e.target.closest('section').id;
    this.setState({ currentMovie: episode_id });;
  };

  updateFavorite = name => {
    const movies = this.state.movies.map( movie => movie );
    const movie = movies.find( movie => movie.episode_id === Number(this.state.currentMovie));
    const character = movie.characters.find( character => character.name === name);
    const favorited = character.isFavorited;
    character.isFavorited = !favorited;
    this.setState({ movies });
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  returnFavoriteCharacters = () => {
    const movie = this.state.movies.find(movie => movie.episode_id === Number(this.state.currentMovie));
    const favCharacters = movie.characters.filter(character => character.isFavorited);
    return favCharacters;
  };

  signOut = () => {
    this.setState({ name: '', quote: '', rank: '' });
  };

  render() {
    return (
      <main>
        <div className="main__div">
        <div className="main__div--info">
          <h1 className="user-info user-name">{this.state.name}</h1>
          <h1 className="user-info user-quote">{this.state.quote}</h1>
          <h1 className="user-info user-rank">{this.state.rank}</h1>
        </div>
        <h1 className="title">Star Wars: Trivia</h1>
        <NavLink to='/'>    
          <button className="button__sign-out" onClick={this.signOut}>Sign Out</button>
        </NavLink>
        </div>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movies={this.state.movies} updateState={this.updateState} />} />}
        <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} sortMovies={this.sortMovies} />} />
        <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params;
        const opening_crawl = this.state.movies.find(movie => movie.episode_id === parseInt(id)).opening_crawl;
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters;
        const numFavorites = this.returnFavoriteCharacters().length;
        return (<CharacterContainer 
          opening_crawl={opening_crawl} 
          characters={characters} 
          updateFavorite={this.updateFavorite}
          numFavorites={numFavorites} 
        />);
      }} />
        <Route exact path='/movies/favorite-characters' render={() => {
          return <FavoriteCharactersContainer 
            characters={this.returnFavoriteCharacters()} 
            updateFavorite={this.updateFavorite} 
          />
        }} />
    </main>
    );
  };
};

App.propTypes = {
  movies: PropTypes.array,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  quote: PropTypes.string,
  rank: PropTypes.string,
  sortMovies: PropTypes.func,
  selectMovie: PropTypes.func,
  updateFavorite: PropTypes.func,
  returnFavoriteCharacters: PropTypes.func,
  signOut: PropTypes.func,
}

export default App;

