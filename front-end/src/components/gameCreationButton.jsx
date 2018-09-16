import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GamePage from './gamePage.jsx';

export default class GameCreationButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/gamePage">
          <button type="button" className="btn btn-success">Create Game</button>
        </Link>
      </div>
    )
  }
}