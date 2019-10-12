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
    console.log('handle change-->', this.state)
  };

  enableSubmitBtn = (e) => {
    if($('.form__input').val.length > 0 ) {
      $('.form__button').prop('disabled', false)
    }
    this.handleChange(e)
  };

  handleSubmit = () => {
    const { name, quote, rank } = this.state;

    if(name && quote) {
        this.props.setUser(name, quote, rank);
        this.setState({ name:'' , rank:'', quote:'', revealError:false, toMovies:true});
    } else {
        this.setState({revealError:true})
    }
  }

  // submitUser = (e) => {
  //   console.log('submit user firing')
  //   e.preventDefault();
  //   const {submitUserInfo} = this.props
  //   console.log('in form-->', this.name, this.quote, this.rank)
  //   submitUserInfo(this.name, this.quote, this.rank)
  //   // this.resetInputs()
  // };

  // resetInputs = () => {
  //   this.setState({
  //     name: '',
  //     quote: '',
  //     rank: ''
  //   });
  // };

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
        <button className="form__button" title="Fill out each input to continue" onClick={this.handleSubmit}>Submit</button>
        </NavLink>
      </form>
      </div>
    )
  };
};
