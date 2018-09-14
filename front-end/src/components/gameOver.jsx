import React from 'react';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    )
  }
}

export default GameOver;