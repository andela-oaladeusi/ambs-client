/*global FB*/
/*global gapi*/
import React, { Component } from 'react';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';
import LoginForm from './LoginForm';

class UserLoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LoginForm />
        </div>
        OR
        <div className="row">
          <div className="col s3 center">
          
          </div>
          <div className="col s3">
            <FacebookButton fb={FB}/>
          </div>
          <div className="col s3">
            <GoogleButton gapi={gapi}/>
          </div>
          <div className="col s3 center">
            
          </div>
        </div>
      </div>
    )
  }
}

export default UserLoginPage;
