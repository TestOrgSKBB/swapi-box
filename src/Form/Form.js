import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import MovieContainer from '../MovieContainer/MovieContainer'
import $ from 'jquery';
import './Form.scss'

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
  };

  enableSubmitBtn = (e) => {
    if($('.form__input').val.length > 0 ) {
      $('.form__button').prop('disabled', false)
    }
    this.handleChange(e)
  };

  submitUserInfo = (e) => {
    e.preventDefault();
    //pass info to app that will pass it to component that renders user info
    this.resetInputs()
  };

  resetInputs = () => {
    this.setState({
      name: '',
      quote: '',
      rank: ''
    });
  };

  render() {
    return(
      <div id="form__div--container">
      <form>
        <input 
          className="form__element form__input"
          type="text" 
          placeholder="Enter Name"
          value={ this.state.name }
          name="name"
          onChange={ this.handleChange }
          />
        <input 
          className="form__element from__input"
          type="text" 
          placeholder="Enter Favorite Star Wars Quote"
          value={ this.state.quote }
          name="quote"
          onChange={ this.handleChange}
          />
        <select className="form__element" name="rank" value={this.state.rank} onChange={this.enableSubmitBtn}>
          <option defaultValue="rank">Rank</option>
          <option name="rank" value="beginner">Beginner</option>
          <option name="rank" value="intermediate">Intermediate</option>
          <option name="rank" value="expert">Expert</option>
        </select>
        <NavLink className="form__button--link" to='/movies'>
        <button className="form__button" title="Fill out each input to continue" disabled onClick={this.submitUserInfo}>Submit</button>
        </NavLink>
      </form>
      </div>
    )
  };
};
