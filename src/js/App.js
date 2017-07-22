import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AMBS</h2>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
