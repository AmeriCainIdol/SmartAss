import React, { Component } from 'react';
import Answers from './gamePageAnswers.jsx';
import Questions from './gamePageQuestions.jsx';
import Choices from './choices.jsx';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    console.log(props.history.location.state.state, 'hello');
    this.state = {
      selectedAnswer: null,
      score: 0,
      correctAnswer: null,
      timeRemaining: 20,
      questionsToDisplay: this.props.history.location.state.state,
      newQuestionOrder: []
    }
    this.toggleSelector = this.toggleSelector.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
    this.countdown = this.countdown.bind(this);
    this.reorderQuestions = this.reorderQuestions.bind(this);
  }
  
  toggleSelector(position) {
      this.setState({selectedAnswer: position}, () => {
        // console.log(Timer.propTypes) 
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
  
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  
  componentDidMount () {
    this.interval = setInterval(() => this.countdown(), 1000)
    setInterval(() => {
      if (this.state.selectedAnswer === this.state.correctAnswer) {
        this.setState({ score: this.state.score + 1 });
      }    
    }, 1000)
  }

  reorderQuestions () {
    this.setState({
      // correctAnswer: this.state.questionsToDisplay.correct_Answer
    })
  }

  componentDidMount() {
    this.setState({correctAnswer: this.state.questionsToDisplay.correct_Answer}, () => {})
  }

  render () {
    return (
      <div className="container-fluid">
        {this.state.questionsToDisplay.map((question, index) => {
          console.log(question, 'ugh')
          return (<Choices key={index} question={question} />)
        })}
        {/* <div className="row">
          <div className="col-md-12">
            {this.state.questionsToDisplay.map((question, index) => {
              console.log(question, 'ugh')
              return (<Questions key={index} question={question}/>)
            })}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              {this.state.questionsToDisplay.map((question, index) => {
                console.log(question, 'ugh')
                return (<Answers key={index} question={question} />)
              })}
            </table>
          </div>
          
          <div className="col-md-4">
            <div>
              <h3>Time Remaining: {this.state.timeRemaining}</h3>
              <h4>Score: {this.state.score}</h4>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}