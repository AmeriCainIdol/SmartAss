import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import SignUp from './components/sign_up.jsx';
import GameOver from './components/gameOver.jsx';
import GamePage from './components/gamePage.jsx';
import GameCreation from './components/gameCreation.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  signUp () {

  }

  render () {
    return (
      <Home />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));