import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './sign_up.jsx';
import GameCreation from './gameCreation.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
      <div className="container-fluid">
        <h1>Smart-Ass™</h1>
        <h2>A Trivia Game</h2>
        <h3>© 2018</h3>
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
                  <h4>Create Game</h4>
                  <Link to="/gameCreation">
                    <button type="submit" className="btn btn-primary">Create Game</button>
                    <Route path="/gameCreation" component={GameCreation} />
                  </Link>
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
                <h5>Not a player? Sign Up Here </h5>
                <Link to="/sign_up">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                  <Route path="/sign_up" component={SignUp} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    )
  }

}

export default Home;