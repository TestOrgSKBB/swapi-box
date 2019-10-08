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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    console.log('handle change firing')
    console.log(this.state)
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
        <input 
          type="text" 
          placeholder="Enter Favorite Star Wars Quote"
          value={ this.state.quote }
          name="quote"
          onChange={ this.handleChange}
          />

          
        
        <button onClick={this.submitUserInfo}>Submit</button>
      </form>
    )
  };


  

}