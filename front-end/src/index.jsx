import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/sign_in.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      
    <div className="container-fluid">
      <h1>SmartAss</h1>
      <h2>A Trivia Game</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <h3>Leader Board</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Wins</th>
                    <th>Losses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jstrzesz</td>
                    <td>4</td>
                    <td>0</td>
                  </tr>
                </tbody>
					    </table>
            </div>
            <div className="col-md-4">
              <form role="form">
                <div className="form-group">
                  <label>
                    Username
							</label>
                  <input type="email" className="form-control" id="UsernameInput" />
                </div>
                <div className="form-group">
                  <label>
                    Email address
							</label>
                  <input type="email" className="form-control" id="EmailInput" />
                </div>
                <div className="form-group">
                  <label>
                    Password
							</label>
                  <input type="password" className="form-control" id="PasswordInput" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
						</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));