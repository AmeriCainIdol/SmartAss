import React, { Component } from 'react';

export default class Answers extends Component {
  constructor(props) {
    super(props);
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
    this.setState({ selectedAnswer: position }, () => { 
    })
  }

  selectedColor(position) {
    if (this.state.selectedAnswer === position) {
      return '#87FDFD'
    }
    return '';
  }

  componentDidMount() {
    this.setState({}, () => {})
  }

  render () {
    return (
      <div>
      <h1>{this.props.question.key}</h1>
      <p>{this.props.question.question}</p>
      </div>
    )
  }
}