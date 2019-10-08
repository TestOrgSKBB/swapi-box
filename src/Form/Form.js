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

  render() {
    return(
      <form>
        <button>Submit</button>
      </form>
    )
  }


  

}