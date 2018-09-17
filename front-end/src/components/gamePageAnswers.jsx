import React, { Component } from 'react';

export default class Answers extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      selectedAnswer: null,
      score: 0,
      correctAnswer: null,
      timeRemaining: 20,
      newQuestionOrder: []
    }
    this.toggleSelector = this.toggleSelector.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
  }

  toggleSelector(position) {
    this.setState({ selectedAnswer: position }, () => {})
  }

  selectedColor(position) {
    if (this.state.selectedAnswer === position) {
      return '#87FDFD'
    }
    return '';
  }

  componentDidMount() {
    this.setState({ correctAnswer: this.props.question.correct_answer }, () => {})
  }

  render () {
    return (
      <div>
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
      </div>
    )
  }
}