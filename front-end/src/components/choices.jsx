import React, { Component } from 'react';

export default class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: null,
      score: 0,
      correctAnswer: null,
      timeRemaining: 60,
      newQuestionOrder: []
    }
    this.toggleSelector = this.toggleSelector.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  toggleSelector(position) {
    this.setState({ selectedAnswer: position }, () => { })
  }

  selectedColor(position) {
    if (this.state.selectedAnswer === position) {
      return '#87FDFD'
    }
    return '';
  }

  countdown() {
    this.setState((prevState) => ({
      timeRemaining: prevState.timeRemaining - 1
    }))
    if (this.state.timeRemaining === 0) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countdown(), 1000)
    // setInterval(() => {
    //   if (this.state.selectedAnswer === this.state.correctAnswer) {
    //     this.setState({ score: this.state.score + 1 });
    //   }
    // }, 1000)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Question</h2>
            <p>{this.props.question.question}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <tbody>
                <tr className="first-option">
                  <td style={{ background: this.selectedColor('A') }} onClick={() => this.toggleSelector('A')}>A</td>
                  <td style={{ background: this.selectedColor('A') }} onClick={() => this.toggleSelector('A')}>{this.props.question.incorrect_answers[1]}</td>
                </tr>
                <tr className="second-option">
                  <td style={{ background: this.selectedColor('B') }} onClick={() => this.toggleSelector('B')}>B</td>
                  <td style={{ background: this.selectedColor('B') }} onClick={() => this.toggleSelector('B')}>{this.props.question.incorrect_answers[2]}</td>
                </tr>
                <tr className="third-option">
                  <td style={{ background: this.selectedColor('C') }} onClick={() => this.toggleSelector('C')}>C</td>
                  <td style={{ background: this.selectedColor('C') }} onClick={() => this.toggleSelector('C')}>{this.props.question.correct_answer}</td>
                </tr>
                <tr className="fourth-option">
                  <td style={{ background: this.selectedColor('D') }} onClick={() => this.toggleSelector('D')}>D</td>
                  <td style={{ background: this.selectedColor('D') }} onClick={() => this.toggleSelector('D')}>{this.props.question.incorrect_answers[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div>
              <h3>Time Remaining: {this.state.timeRemaining}</h3>
              {/* <h4>Score: {this.state.score}</h4> */}
              <button type="button"
                      className="btn btn-success">Next Question</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}