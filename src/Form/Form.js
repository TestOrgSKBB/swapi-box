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
    this.setState({
      name: '',
      quote: '',
      rank: ''
    });
    console.log('state after', this.state)
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
        <select name="rank" value={this.state.rank} onChange={this.handleChange}>
          <option defaultValue="rank">Rank</option>
          <option name="rank" value="beginner">Beginner</option>
          <option name="rank" value="intermediate">Intermediate</option>
          <option name="rank" value="expert">Expert</option>
        </select>

          
        
        <button onClick={this.submitUserInfo}>Submit</button>
      </form>
    )
  };


  

}