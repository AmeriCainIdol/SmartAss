import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import GamePage from './gamePage.jsx';
import request from 'request';
import triviaHelpers from '../../../server/trivia_api_helpers.js';


export default class GameCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIsOpen: false,
      difficultyIsOpen: false,
      category: '',
      difficulty: ''
    }
    this.toggleOpenCategory = this.toggleOpenCategory.bind(this);
    this.toggleOpenDifficulty = this.toggleOpenDifficulty.bind(this);
    this.categoryDropdownClick = this.categoryDropdownClick.bind(this);
    this.difficultyDropdownClick = this.difficultyDropdownClick.bind(this);
  }

  toggleOpenCategory () {
    this.setState({ categoryIsOpen: !this.state.categoryIsOpen })
  }

  toggleOpenDifficulty () {
    this.setState({ difficultyIsOpen: !this.state.difficultyIsOpen })
  }

  categoryDropdownClick (e) {
    e.preventDefault();
    this.setState({
      category: e.target.name
    })
  }

  difficultyDropdownClick(e) {
    e.preventDefault();
    console.log(e.target)
    this.setState({
      difficulty: e.target.level
    })
  }

  componentDidUpdate() {
    
  }
  
  render () {
    const categoryMenuClass = `dropdown-menu${this.state.categoryIsOpen ? " show" : ""}`;
    const difficultyMenuClass = `dropdown-menu${this.state.difficultyIsOpen ? " show" : ""}`;
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
                  <th>Difficulty</th>
                  <th>Category Selection</th>
                  <th>Difficulty Selection</th>
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
                    {this.state.difficulty}
                  </td>
                  <td>
                    <div className="dropdown" onClick={this.toggleOpenCategory}>
                      <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true">Category</button>
                      <div className={categoryMenuClass} aria-labelledby="dropdownMenuButton">
                        {triviaHelpers.triviaHelpers.trivia_categories.map(category => {
                          return (<a  className="dropdown-item" 
                                      href="#" 
                                      category={category}
                                      name={category.name} 
                                      key={category.id}
                                      onClick={e => this.categoryDropdownClick(e)}>{category.name}</a>);
                        })}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown" onClick={this.toggleOpenDifficulty}>
                      <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true">Difficulty</button>
                      <div className={difficultyMenuClass} aria-labelledby="dropdownMenuButton">
                        {triviaHelpers.triviaHelpers.difficulty_levels.map(difficulty => {
                          return (<a className="dropdown-item"
                            href="#"
                            level={difficulty.level}
                            key={difficulty.id}
                            onClick={e => this.difficultyDropdownClick(e)}>{difficulty.level}</a>);
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
                <Link to="/gamePage" >
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