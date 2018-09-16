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
    this.setState((prevState, props) => ({
      timeRemaining: prevState.timeRemaining - 1
    }))
    if (this.state.timeRemaining === 0) {
      clearInterval(this.interval);
    }
    // this.setState({
    //   time: this.state.time,
    //   start: Date.now()
    // })
    // this.timer = setInterval(() => this.setState({
    //   time: this.state.time - 1
    // }), 1000)
    // console.log('start')
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
        {/* <button onClick={this.countdown}>Start</button> */}
      </div>
    )
  }
}

export default Timer;