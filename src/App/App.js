import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { format } from 'url';
import { Route, NavLink } from 'react-router-dom';
import { fetchData } from '../apiCalls';


import CharacterContainer from '../CharacterContainer/CharacterContainer'
import MovieContainer from '../MovieContainer/MovieContainer'

export default class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      characters: [],
      isLoading: true,
      movieSelected: null
    }
  }

  componentDidMount = () => {
    fetchData()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(movies => this.setState({ movies , isLoading: false}))
    .catch(error => console.log(error));
  }

  render() {
    return (
    <body>
        <main>
        <h1 className="title">Star Wars: Trivia</h1>
          <NavLink to='/'>    
        <button>Sign Out</button>
          </NavLink>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movie={this.state.movies} />} />}
        <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />} />
        <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
        return (<CharacterContainer characters={characters}/>)
      }} />
        </main>

      </body>
    )
  }
} 