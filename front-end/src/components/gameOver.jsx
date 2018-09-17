import React from 'react';
import Home from './home.jsx';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      image: ''
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
            <h2>You Won! / You Lost!</h2>
            <p>Here's a cookie! / No cookie for you!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>Ranking:</h3>
            <ol>
              <li className="list-item">Player 1</li>   
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