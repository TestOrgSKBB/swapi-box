import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      rank: ''
    }
  }

  submitUserInfo = (e) => {
    e.preventDefault();
    console.log('submit info firing')
  }

  render() {
    return(
      <form>
        <input type="text" placeholder="Enter Name"></input>
        <input type="text" placeholder="Enter Favorite Star Wars Quote"></input>
        
        <button onClick={this.submitUserInfo}>Submit</button>
      </form>
    )
  }


  

}