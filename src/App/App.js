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
      movies: {},
      characters: []
    }
  }

  componentDidMount = () => {
    fetchData()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(movies => this.setState({ movies }))
    .catch(error => console.log(error));
  }

  render() {
    return (
    <body>
        <main>
        <Route exact path='/' component={Form} />
        </main>}

      </body>
    )
  }
} 