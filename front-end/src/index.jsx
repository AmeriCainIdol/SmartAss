import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/sign_up.jsx';
import GameOver from './components/gameOver.jsx';
import GamePage from './components/gamePage.jsx';
import GameCreation from './components/gameCreation.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  signUp () {

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
    // <div className="container-fluid">
    //   <h1>Smart-Ass™</h1>
    //   <h2>A Trivia Game</h2>
    //   <h3>© 2018</h3>
    //   <div className="row">
    //     <div className="col-md-12">
    //       <div className="row">
    //         <div className="col-md-8">
    //           <h3>Leader Board</h3>
    //           <table className="table">
    //             <thead>
    //               <tr>
    //                 <th>Rank</th>
    //                 <th>Username</th>
    //                 <th>Wins</th>
    //                 <th>Losses</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <td>1</td>
    //                 <td>Jstrzesz</td>
    //                 <td>4</td>
    //                 <td>0</td>
    //               </tr>
    //             </tbody>
		// 			    </table>
    //         </div>
    //         <div className="col-md-4">
    //         <h3>Log In</h3>
    //           <form role="form">
    //             <div className="form-group">
    //               <label>
    //                 Username
		// 					</label>
    //               <input type="email" className="form-control" id="UsernameInput" />
    //             </div>
    //             <div className="form-group">
    //               <label>
    //                 Email address
		// 					</label>
    //               <input type="email" className="form-control" id="EmailInput" />
    //             </div>
    //             <div className="form-group">
    //               <label>
    //                 Password
		// 					</label>
    //               <input type="password" className="form-control" id="PasswordInput" />
    //             </div>
    //             <button type="submit" className="btn btn-primary">
    //               Submit
		// 				</button>
    //           </form>
    //           <h4>New Players</h4>
    //           <h5>Not a player? Sign Up Here </h5>
    //           <button type="submit" className="btn btn-primary">Sign Up</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));