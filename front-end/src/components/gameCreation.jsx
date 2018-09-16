import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import GamePage from './gamePage.jsx';
import request from 'request';
import triviaHelpers from '../../../server/trivia_api_helpers.js';


class GameCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      category: ''
    }
    this.toggleOpen = this.toggleOpen.bind(this);
    this.dropDownClick = this.dropDownClick.bind(this);
  }

  toggleOpen () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  dropDownClick (e) {
    e.preventDefault();
    console.log(e)
    this.setState({
      category: e.currentTarget
    })
    console.log(this.state);
  }

  componentDidUpdate() {
    
  }
  
  render () {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`
    return (
      <div className="container-fluid">
        <h1>Create Game</h1>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Players In Game</th>
                  <th>Category</th>
                  <th>Category Selection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Player 1
                  </td>
                  <td>
                    {this.state.category}
                  </td>
                  <td>
                    <div className="dropdown" onClick={this.toggleOpen}>
                      <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true">Category</button>
                      <div className={menuClass} aria-labelledby="dropdownMenuButton">
                        {triviaHelpers.triviaHelpers.trivia_categories.map(category => {
                          return (<a  className="dropdown-item" 
                                      href="#" 
                                      category={category}
                                      name={category.name} 
                                      key={category.id}
                                      onClick={this.dropDownClick}>{category.name}</a>);
                        })}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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