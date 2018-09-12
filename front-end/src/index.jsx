import React from ('react');
import ReactDOM from ('react-dom');

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    console.log('hello');
  }
}

ReactDOM.render(<App />, document.getElementById('app'));