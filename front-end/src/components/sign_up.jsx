import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      passwordinput: '',
      passwordinput2: '',
        //unique user validation
      userIsUnique: false,
        //redirect to game creation
      readyToGame: false,
        //password validation
        // passwordValidationErrors: { passwordInput: '', passwordInput2: '' },
        // passwordValid: false,
      formValid: false,
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.redirectToGameCreation = this.redirectToGameCreation.bind(this);
  }

  handleChange(event) {
        //console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
        //get the state in password input fields
    const newUser = {
      email: this.state.email,
      passwordinput: this.state.passwordinput,
      passwordinput2: this.state.passwordinput2,
    }
        //make sure they match
    if (newUser.passwordinput === newUser.passwordinput2) {
      this.setState({ formValid: true })
    } else {
            //change state in form valid
      this.setState({ formValid: false })
    }
  }



  handleSubmit(event) {
    event.preventDefault();
      const newUser = {
        username: this.state.username,
        email: this.state.email,
        passwordinput: this.state.passwordinput,
        passwordinput2: this.state.passwordinput2
      }

        //console.log(passwordinput, passwordinput2)

    axios.post('/sign_up', newUser)
      .then((response) => {
        console.log('axios post from form submit on signup:', response);
      }).catch(error => {
        console.log(error);
      })
  }

  redirectToGameCreation() {
    this.props.history.push('/gameCreation', {state: this.state.username})
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Smart-Ass Sign Up</h1>
        <div className="row">
          <div className="col-md-12">
            <form role="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Create Username</label>
                <input type="text" name="username" className="form-control" id="UsernameCreate" onChange={this.handleChange} />
              </div>
            <div className="form-group">
              <label>Email address</label>
              <input  type="text" 
                      name="email" 
                      className="form-control" 
                      id="EmailInputSign-In" 
                      onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label id="passwordInput">Password</label>
              <input type="password" 
                      name="passwordinput" 
                      className="form-control" 
                      id="passwordInputSign-In" 
                      onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label id="passwordInput2">Re-Enter Password to confirm</label>
              <input  type="password" 
                      name="passwordinput2" 
                      className="form-control" 
                      id="passwordInputSign-InConfirm" 
                      onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button type="submit" 
                    className="btn btn-primary" 
                    onClick={this.redirectToGameCreation}>Join a Game</button>
          </div>
        </div>
      </div>
    )
  }
}
