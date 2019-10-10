import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { format } from 'url';
import { BrowswerRouter as Router, Route} from 'react-router-dom'

export default class App extends Component {





  render() {
    return (
      <Router>
        <Route exact path='/' component={Form} />
           <main className="App">
           <h1>SWAPI-Trivia</h1>
        
      </main>
      </Router>
    )
  }
}