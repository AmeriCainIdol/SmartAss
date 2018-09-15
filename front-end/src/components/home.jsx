import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import SignUp from './sign_up.jsx';
import GameCreation from './gameCreation.jsx';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BrowserRouter>
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
                    {/* <h4>Create Game</h4>
                    <NavLink to="/gameCreation">
                      <button type="submit" className="btn btn-primary">Create Game</button>
                      <Route path="/gameCreation" component={GameCreation} />
                    </NavLink> */}
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
                  {/* <h4>New Players</h4>
                  <h5>Not a player? Sign Up Here </h5>
                  <NavLink to="/sign_up">
                    <button type="submit" className="btn btn-primary">Sign Up</button>

                    <Route path="/sign_up" component={ SignUp } />
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default Home;