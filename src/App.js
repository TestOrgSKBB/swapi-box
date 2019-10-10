import React, { Component } from 'react';
// import { fetchMovies } from './apiCalls'
import { fetchData } from './apiCalls';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: {},
    }
  }

  componentDidMount = () => {
    fetchData('https://swapi.co/api/films/')
    .then(data => {
      console.log(data);
      return data;
    })
    .then(movies => this.setState({ movies }))
    .catch(error => console.log(error));
  }
  
  render() {
    return (
      <h1>Fetch testing branch</h1>
    );
  };
};

export default App;
