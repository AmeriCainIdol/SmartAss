import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import SignUp from './components/sign_up.jsx';
import GameOver from './components/gameOver.jsx';
import GamePage from './components/gamePage.jsx';
import GameCreation from './components/gameCreation.jsx';
import Navigation from './components/navigation.jsx';
import triviaHelpers from '../../server/trivia_api_helpers.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triviaHelpers: triviaHelpers,
      timeRemaining: 20
    }
  }


  signUp() {

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch >
            <Route exact={true} path="/" component={Home} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/gameCreation" component={GameCreation} />
            <Route path="/gamePage" component={GamePage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));