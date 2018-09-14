import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/sign_up.jsx';
import GameOver from './components/gameOver.jsx';
import GamePage from './components/gamePage.jsx';
import GameCreation from './components/gameCreation.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <h3>Leader Board</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Wins</th>
                    <th>Losses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jstrzesz</td>
                    <td>4</td>
                    <td>0</td>
                  </tr>
                </tbody>
					    </table>
            </div>
            <div className="col-md-4">
            <h3>Log In</h3>
              <form role="form">
                <div className="form-group">
                  <label>
                    Username
							</label>
                  <input type="email" className="form-control" id="UsernameInput" />
                </div>
                <div className="form-group">
                  <label>
                    Email address
							</label>
                  <input type="email" className="form-control" id="EmailInput" />
                </div>
                <div className="form-group">
                  <label>
                    Password
							</label>
                  <input type="password" className="form-control" id="PasswordInput" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
						</button>
              </form>
              <h4>New Players</h4>
              <label>Not a player? Sign Up Here </label>
              <button type="sign_up" className="btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));