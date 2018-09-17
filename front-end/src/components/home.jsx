import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SignUp from './sign_up.jsx';
import GameCreation from './gameCreation.jsx';
import Users from './userDisplay.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.redirectToGameCreation = this.redirectToGameCreation.bind(this);
  }

  redirectToSignUp () {
    this.props.history.push('/sign_up')
  }

  redirectToGameCreation() {
    this.props.history.push('/gameCreation')
  }

  componentDidMount() {
    axios.get('/users')
      .then(res => {
        // console.log(res)
        this.setState({ users: res.data })
      }).catch(err => {
        console.error(err)
      })
  }

  render () {
    // console.log(this.state.users);
    return (
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
                      <th>Username</th>
                      <th>Rank</th>
                      <th>Wins</th>
                      <th>Losses</th>
                    </tr>
                  </thead>
                    {/* <Users /> */}
                  <tbody>
                    {this.state.users.map((user, index) => {
                      // console.log(user)
                      return (<Users key={index} user={user}/>)
                    })}
                    {/* <tr>
                      <td>Jstrzesz</td>
                      <td>1</td>
                      <td>4</td>
                      <td>0</td>
                    </tr> */}
                  </tbody>
                </table>
                <div>
                  <BrowserRouter>
                    <Link to="/gameCreation">
                      <button type="submit" 
                              className="btn btn-primary" 
                              onClick={this.redirectToGameCreation}>Create Game</button>
                    </Link>
                  </BrowserRouter>
                </div>
              </div>

              <div className="col-md-4">
                <h3>Log In</h3>
                <form role="form">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" id="UsernameInput" />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="EmailInput" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="PasswordInput" />
                  </div>
                  <button type="submit" className="btn btn-primary">Log In</button>
                </form>
                <h4>New Players</h4>
                <h5>Not a player? Sign Up Here </h5>
                <BrowserRouter>
                  <Link to="/sign_up">
                    <button type="submit" 
                            className="btn btn-primary" 
                            onClick={this.redirectToSignUp}>Sign Up</button>
                  </Link>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}