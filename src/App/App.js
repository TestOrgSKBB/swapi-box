import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss'
import { format } from 'url';
import { Route, NavLink } from 'react-router-dom';
import { fetchData } from '../apiCalls';


import CharacterContainer from '../CharacterContainer/CharacterContainer'
import MovieContainer from '../MovieContainer/MovieContainer'

export default class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      isLoading: true,
      name: '',
      quote: '',
      rank:''
    }
  };

  setUser = (name, quote, rank)=> {
    console.log(name, quote, rank)
    this.setState({ name, quote, rank })
    console.log('state', this.state)
  };

  componentDidMount = () => {
    fetchData()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(movies => this.setState({ movies , isLoading: false}))
    .catch(error => console.log(error));
  };

  submitUserInfo = (name, quote, rank) => {
    console.log(name, quote, rank)
    this.setState({name: name, quote: quote, rank: rank} )
    console.log(this.state)
  };

  updateState = (statesObj) => {
    this.setState(statesObj);
  }

  render() {
    return (
      <main>
        <div className="main__div">
          <h1 className="title">Star Wars: Trivia</h1>
        <div className="main__div--info">
          <h1 className="user-info user-name">{this.state.name}</h1>
          <h1 className="user-info user-quote">" {this.state.quote} "</h1>
          <h1 className="user-info user-rank">{this.state.rank}</h1>
        </div>
        <NavLink to='/'>    
          <button className="button__sign-out">Sign Out</button>
        </NavLink>
        </div>
        {this.state.isLoading && <h1>Loading...</h1>}
        {!this.state.isLoading && <Route exact path='/' render={() => <Form movie={this.state.movies} updateState={this.updateState} setUser={this.setUser} />} />}
        <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies}/>} />
        <Route exact path='/movies/:id/characters' render={({match}) => {
        const { id } = match.params
        const opening_crawl = this.state.movies.find(movie => movie.episode_id === parseInt(id)).opening_crawl
        {console.log('in app----->', opening_crawl)}
        const characters = this.state.movies.find(movie => movie.episode_id === parseInt(id)).characters
        {console.log('characters in app-->', characters)}
        return (<CharacterContainer opening_crawl={opening_crawl} characters={characters}/>)
      }} />
    </main>
    )
  }
} 