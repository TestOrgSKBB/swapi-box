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

  selectMovie = (id) => {
    this.setState({ movieSelected: id })
  }

  render() {
    return (
    <body>
        <main>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movie={this.state.movies} />} />}
        <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />} />

 
        {this.state.characters &&
          <Route
            exact path='/movies/3'
            render={() => <CharacterContainer characters={this.state.characters} />} />
        }

        {/* <Route exact path='/movies/:id/characters' render={({match}) => {
          console.log(match)
        const { id } = match.params
        console.log(this.state.movies, '<-----')
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
          console.log('characters?', characters)
        return (<CharacterContainer characters={characters}/>)
      }} /> */}


        {/* <Route exact path='/:movie_id' render={({match}) =>  {
          const { id } = match.params
          console.log('movies in render-->', this.state.movies)
          const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
        return (<CharacterContainer characters={characters} />)
      }}/>
        {console.log(match)} */}
        </main>

      </body>
    )
  }
} 