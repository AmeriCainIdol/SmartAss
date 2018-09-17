import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import GamePage from './gamePage.jsx';
import request from 'request';
import triviaHelpers from '../../../server/trivia_api_helpers.js';
import axios from 'axios';


export default class GameCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIsOpen: false,
      difficultyIsOpen: false,
      category: '',
      categoryId: null,
      difficulty: '',
      questions: []
    }
    this.toggleOpenCategory = this.toggleOpenCategory.bind(this);
    this.toggleOpenDifficulty = this.toggleOpenDifficulty.bind(this);
    this.categoryDropdownClick = this.categoryDropdownClick.bind(this);
    this.difficultyDropdownClick = this.difficultyDropdownClick.bind(this);
    this.redirectToGamePage = this.redirectToGamePage.bind(this);
    this.handleSubmitGameParams = this.handleSubmitGameParams.bind(this);
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
      category: e.target.name,
      categoryId: e.target.id
    })
  }

  difficultyDropdownClick(e) {
    e.preventDefault();
    this.setState({
      difficulty: e.target.name
    })
  }

  redirectToGamePage() {
    this.props.history.push('/gamePage', {state: this.state.questions})
  }

  componentDidMount() {
    axios.get('/gameCreation')
      .then(res => {
        console.log(res, 'squanch')
        this.setState({questions: res.data})
      }).catch(err => {
        console.error(err)
      })
  }

  handleSubmitGameParams(event) {
    event.preventDefault();
    const gameParams = {
      category: this.state.categoryId,
      difficulty: this.state.difficulty
    }

    axios.post('/gameCreation', gameParams)
      .then(response => {
        console.log(response, 'axios post request from gameCreation page')
      }).catch(error => {
        console.error(error);
      })
  }
  
  render () {
    const categoryMenuClass = `dropdown-menu${this.state.categoryIsOpen ? " show" : ""}`;
    const difficultyMenuClass = `dropdown-menu${this.state.difficultyIsOpen ? " show" : ""}`;
    <GamePage info={this.state}/>
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
                                      name={category.name} 
                                      key={category.id}
                                      id={category.id}
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
                          return (<a  className="dropdown-item"
                                      href="#"
                                      name={difficulty.level}
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
              <Link to="/gamePage">
                  <button type="button" 
                          className="btn btn-success" 
                          onClick={this.handleSubmitGameParams}
                          onClick={this.redirectToGamePage}>Create Game</button>
                </Link>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}