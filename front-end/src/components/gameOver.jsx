import React from 'react';
import ReactDOM from 'react-dom';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h2>You Won! / You Lost!</h2>
            <p>Here's a cookie! / No cookie for you!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h3>Ranking:</h3>
            <ol>
              <li class="list-item">Player 1</li>   
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default GameOver;