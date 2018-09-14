import React from 'react';

class GameCreation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
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
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">Category</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item disabled" href="#">Category</a> <a className="dropdown-item" href="#">History</a> <a className="dropdown-item" href="#">Geography</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-success">Create Game</button>
        </div>
      </div>
    </div>
  )
  }
}
export default GameCreation;