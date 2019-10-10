import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { format } from 'url';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import MovieContainer from '../MovieContainer/MovieContainer'

export default class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      characters: []
    }
  }



  render() {
    return (
      <Router>
        <Route exact path='/' component={Form} />
        { this.state.movies && <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies}/>}/>
        }
        {this.state.characters && <Route exact path='/movies/1' render={() => <CharacterContainer characters={this.state.characters}/>}/>}
      </Router>
    )
  }
}