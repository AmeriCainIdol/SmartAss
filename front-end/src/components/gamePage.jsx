import React from 'react';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
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
                <td>A</td>
                <td>Eruption of Mount Vesuvius</td>
              </tr>
              <tr className="second-option">
                <td>B</td>
                <td>The siege of Troy</td>
              </tr>
              <tr className="third-option">
                <td>C</td>
                <td>The minoan eruption of Santorini</td>
              </tr>
              <tr className="fourth-option">
                <td>D</td>
                <td>The asteroid that killed the dinosaurs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h2>Time Limit:</h2>
          <p>20 seconds</p>
        </div>
      </div>
    </div>
  )
  }
}

export default GamePage;