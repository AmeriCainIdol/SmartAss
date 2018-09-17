import React from 'react';
import Home from './home.jsx';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 7,
      username: this.props.history.location.state.state
    }
    this.redirectToHomePage = this.redirectToHomePage.bind(this);
  }

  redirectToHomePage() {
    this.props.history.push('/');
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>You Won</h2>
            <p>Here's a cookie!</p>
            <h3>ERRoR: The Cookies are a Lie!!!11!!1!!!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>Ranking: 1   Score: 7 / 10</h3>
            <ol>
              <li className="list-item">{this.state.username}</li>   
            </ol>
          </div>
        </div>
        <div>
          <button type="button" 
                  className="btn btn-success" 
                  onClick={this.redirectToHomePage}>Return to Home Page</button>
        </div>
      </div>
    )
  }
}

export default GameOver;