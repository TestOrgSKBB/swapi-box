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
      isLoading: true,
      name: '',
      quote: '',
      rank: '',
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

  updateState = (statesObj) => {
    this.setState(statesObj);
  }

  render() {
    return (
      <main>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movie={this.state.movies}
           updateState={this.updateState} 
          />} 
        />}
        <Route path='/movies' render={() => <MovieContainer movies={this.state.movies} />} />
      </main>
    )
  }
} 