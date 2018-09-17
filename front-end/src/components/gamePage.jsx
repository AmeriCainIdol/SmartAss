import React, { Component } from 'react';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    // console.log(props.history.location.state.state);
    this.state = {
      selectedAnswer: null,
      score: 0,
      correctAnswer: 'C',
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
      correctAnswer: this.state.questionsToDisplay.correct_Answer
    })
  }

  componentDidMount() {
    this.setState({correctAnswer: this.state.questionsToDisplay.correct_Answer}, () => {})
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Question #</h2>
            <p>{this.state.questionsToDisplay[0].question}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <tbody>
                <tr className="first-option">
                  <td style={{ background: this.selectedColor('A') }} onClick={() => this.toggleSelector('A')}>A</td>
                  <td style={{ background: this.selectedColor('A') }} onClick={() => this.toggleSelector('A')}></td>
                </tr>
                <tr className="second-option">
                  <td style={{ background: this.selectedColor('B') }} onClick={() => this.toggleSelector('B')}>B</td>
                  <td style={{ background: this.selectedColor('B') }} onClick={() => this.toggleSelector('B')}>The siege of Troy</td>
                </tr>
                <tr className="third-option">
                  <td style={{ background: this.selectedColor('C') }} onClick={() => this.toggleSelector('C')}>C</td>
                  <td style={{ background: this.selectedColor('C') }} onClick={() => this.toggleSelector('C')}>The minoan eruption of Santorini</td>
                </tr>
                <tr className="fourth-option">
                  <td style={{ background: this.selectedColor('D') }} onClick={() => this.toggleSelector('D')}>D</td>
                  <td style={{ background: this.selectedColor('D') }} onClick={() => this.toggleSelector('D')}>The asteroid that killed the dinosaurs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div>
              <h3>Time Remaining: {this.state.timeRemaining}</h3>
              <h4>Score: {this.state.score}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}