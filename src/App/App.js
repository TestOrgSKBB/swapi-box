import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { format } from 'url';

export default class App extends Component {




  render() {
    return (
      <main className="App">
        <h1>SWAPI-Trivia</h1>
        <Form />
      </main>
    )
  }

}



