import React, { Component } from 'react';
import $ from 'jquery';

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
  };

  enableSubmitBtn = (e) => {

    if($('.form__input').val.length > 0 ) {
      $('.form__button').prop('disabled', false)
    }
    this.handleChange(e)
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
          className="form__input1"
          type="text" 
          placeholder="Enter Name"
          value={ this.state.name }
          name="name"
          onChange={ this.handleChange }
          />
        <input 
          className="from__input"
          type="text" 
          placeholder="Enter Favorite Star Wars Quote"
          value={ this.state.quote }
          name="quote"
          onChange={ this.handleChange}
          />
        <select name="rank" value={this.state.rank} onChange={this.enableSubmitBtn}>
          <option defaultValue="rank">Rank</option>
          <option name="rank" value="beginner">Beginner</option>
          <option name="rank" value="intermediate">Intermediate</option>
          <option name="rank" value="expert">Expert</option>
        </select>
        <button className="form__button" disabled onClick={this.submitUserInfo}>Submit</button>
      </form>
    )
  };


  

}