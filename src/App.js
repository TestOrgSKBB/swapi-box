import React, { Component } from 'react';
import { fetchData } from './apiCalls'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  componentDidMount = () => {
    const data = fetchData();
    data.then(data => console.log(data));
  }
  
  render() {
    return (
      <h1>Fetch testing branch</h1>
    );
  };
};

export default App;
