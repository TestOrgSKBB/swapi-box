import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rank: ''
    };
  };

  handleChange = () => {
    console.log('handle change firing')
  }

  submitUserInfo = (e) => {
    e.preventDefault();
    console.log('submit info firing')
    this.resetInputs()
  };

  resetInputs = () => {
    console.log('reset inputs firing')
    this.setState({
      name: '',
      quote: '',
      rank: ''
    });
  };
 
  render() {
    return(
      <form>
        <input 
          type="text" 
          placeholder="Enter Name"
          value={ this.state.name }
          name="name"
          onChange={ this.handleChange }
          />
        <input type="text" placeholder="Enter Favorite Star Wars Quote"></input>
        
        <button onClick={this.submitUserInfo}>Submit</button>
      </form>
    )
  };


  

}