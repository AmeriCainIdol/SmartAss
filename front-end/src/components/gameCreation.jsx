import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import GamePage from './gamePage.jsx';
import request from 'request';
import triviaHelpers from '../../../server/trivia_api_helpers.js';


class GameCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleOpen = this.toggleOpen.bind(this);
    // console.log(props)
  }

  toggleOpen () {
    this.setState({ isOpen: !this.state.isOpen })
  }    
  
  render () {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h1>Players in Game</h1>
            <ul>
              <li className="list-item">Player 1</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="dropdown" onClick={this.toggleOpen}>
              <button className="btn btn-primary dropdown-toggle" 
                      type="button" 
                      id="dropdownMenuButton" 
                      data-toggle="dropdown" 
                      aria-haspopup="true">Category</button>
              <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#nogo">History</a>
                <a className="dropdown-item" href="#nogo">Geography</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <BrowserRouter>
              <div>
                <Link to="/gamePage">
                  <button type="button" className="btn btn-success">Create Game</button>
                </Link>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}
export default GameCreation;