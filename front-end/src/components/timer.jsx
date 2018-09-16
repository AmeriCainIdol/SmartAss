import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer () {
    this.setState({
      time: this.state.time,
      start: Date.now()
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.time
    }), 1000)
    console.log('start')
  }

  stopTimer () {
    clearInterval(this.timer)
    console.log('stop')
  }

  resetTimer () {
    this.setState({time: 0})
    console.log('reset')
  }

  render () {
    return (
      <div>
        <h3>Time left: {this.state.time}</h3>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    )
  }
}

export default Timer;