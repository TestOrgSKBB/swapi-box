import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { Route, NavLink } from 'react-router-dom';
import { fetchData } from '../apiCalls';


import CharacterContainer from '../CharacterContainer/CharacterContainer'
import MovieContainer from '../MovieContainer/MovieContainer'

export default class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      isLoading: true,
      name: '',
      quote: '',
      rank:'',
      currentMovie: null,
    }
  };

  componentDidMount = () => {
    fetchData()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(movies => this.setState({ movies , isLoading: false}))
    .catch(error => console.log(error));
  };

  updateState = (statesObj) => {
    this.setState(statesObj);
  }

  selectMovie = e => {
    const episode_id = e.target.closest('section').id;
    this.setState({ currentMovie: episode_id });;
  }

  updateFavorite = name => {
    const movies = this.state.movies.map( movie => movie );
    const movie = movies.find( movie => movie.episode_id === Number(this.state.currentMovie));
    const character = movie.characters.find( character => character.name === name);
    const favorited = character.isFavorited;
    character.isFavorited = !favorited;
    this.setState({ movies });
  }

  render() {
    return (
      <main>
        <div className="main__div">
          <h1 className="title">Star Wars: Trivia</h1>
        <div className="main__div--info">
          <h1 className="user-info user-name">{this.state.name}</h1>
          <h1 className="user-info user-quote">{this.state.quote}</h1>
          <h1 className="user-info user-rank">{this.state.rank}</h1>
        </div>
        </div>
        <NavLink to='/'>    
          <button>Sign Out</button>
        </NavLink>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movie={this.state.movies} updateState={this.updateState} />} />}
        <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />} />
        <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
        return (<CharacterContainer characters={characters} updateFavorite={this.updateFavorite} />)
      }} />
    </main>
    )
  }
} 