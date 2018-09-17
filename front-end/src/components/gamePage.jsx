import React, { Component } from 'react';
import Choices from './choices.jsx';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      selectedAnswer: null,
      score: 0,
      correctAnswer: 'C',
      timeRemaining: 20,
      questionsToDisplay: this.props.history.location.state.state.questions,
      newQuestionOrder: [],
      username: this.props.history.location.state.state.username
    }
    this.toggleSelector = this.toggleSelector.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
    this.countdown = this.countdown.bind(this);
    this.reorderQuestions = this.reorderQuestions.bind(this);
    this.redirectToGameOver = this.redirectToGameOver.bind(this);
  }
  
  toggleSelector(position) {
      this.setState({selectedAnswer: position}, () => {
      })
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
  
  redirectToGameOver() {
    this.props.history.push('/gameOver', {state: this.state.username})
  }
  
  componentDidMount () {
    this.interval = setInterval(() => this.countdown(), 1000)
    // setInterval(() => {
    //   if (this.state.selectedAnswer === this.state.correctAnswer) {
        // this.setState({ score: this.state.score });
      // }    
    // }, 1000)
  }

  reorderQuestions () {
    this.setState({})
  }

  componentDidMount() {
    this.setState({correctAnswer: this.state.questionsToDisplay.correct_Answer}, () => {})
  }

  render () {
    return (
      <div className="container-fluid">
        {this.state.questionsToDisplay.map((question, index) => {
          return (<Choices key={index} question={question} />)
        })}
        <div>
          <button type="button"
                  className="btn btn-success"
                  onClick={this.redirectToGameOver}>Game Over</button>
        </div>
      </div>
    )
  }
}