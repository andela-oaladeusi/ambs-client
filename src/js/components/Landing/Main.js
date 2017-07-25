/*global auth2*/
import React, { Component } from 'react';
import UserLoginPage from '../auth/login';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <br/>
          <div className="row center">
            <h5 className="header col s12 light">Manage and listen to your favourites songs</h5>
          </div>
          <div className="row center">
            <p>Get Started</p>
            <UserLoginPage />
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
