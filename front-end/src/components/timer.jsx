import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: 20
    }

    this.countdown = this.countdown.bind(this);
  }
  countdown () {
    this.setState((prevState) => ({
      timeRemaining: prevState.timeRemaining - 1
    }))
    if (this.state.timeRemaining === 0) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countdown(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div>
        <h3>Time Remaining: {this.state.timeRemaining}</h3>
      </div>
    )
  }
}

export default Timer;