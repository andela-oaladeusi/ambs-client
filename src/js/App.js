import React, { Component } from 'react';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
