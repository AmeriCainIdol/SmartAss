import React from 'react';
import Timer from './timer.jsx';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      score: 0,
      answer: null
    }
    this.toggleSelector = this.toggleSelector.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
    this.updateScore = this.updateScore.bind(this);
    // this.toggleAnswerSelector = this.toggleAnswerSelector.bind(this);
  }
  
  toggleSelector(position) {
    if (this.state.active === position) {
      this.setState({active: null})
    } else {
      this.setState({active: position})
      console.log(this.state)
    }
  }

  // toggleAnswerSelector(position) {
  //   if (this.state.answer === position) {
  //     this.setState({ answer: null })
  //   } else {
  //     this.setState({ answer: position })
  //     console.log(this.state)
  //   }
    
  // }

  selectedColor(position) {
    if (this.state.active === position) {
      return '#87FDFD'
    }
    return '';
  }

  // selectedAnswer(position) {
  //   if (this.state.answer )
  // }

  updateScore() {
    // if (this.state)
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>Question #</h2>
            <p>What real-world event is thought to be the inspiration for the destruction of Atlantis?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <tbody>
                <tr className="first-option">
                  <td style={{ background: this.selectedColor('A') }} onClick={() => {
                    this.toggleSelector('A'); 
                    }}>A</td>
                  <td style={{ background: this.selectedColor('A') }} onClick={() => {this.toggleSelector('A');}}>Eruption of Mount Vesuvius</td>
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
            <Timer />
            <div>
              <h3>Score: {this.state.score}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GamePage;