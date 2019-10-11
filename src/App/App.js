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
    console.log(this.state, 'state')
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
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movie={this.state.movies} />} />}
        <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />} />
        <Route exact path='/movies/:id/characters' render={({match}) => {
          console.log('match-->', match)
        const { id } = match.params
        console.log(this.state.movies, '<-----')
        console.log('ID!', id)
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
          console.log('characters?', characters)
        return (<CharacterContainer characters={characters}/>)
      }} />



        </main>

      </body>
    )
  }
} 