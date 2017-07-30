import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import '../../../../styles/index.css';
import FacebookButton from '../../commons/FacebookButton';
import GoogleButton from '../../commons/GoogleButton';

class SignUpPage extends Component {

  render() {
    return (
      <div className="container center">
        <h4 className="header col s12 light">Manage and listen to your favourites songs</h4>
        <h5>Register to get started</h5>
        <br/> <br/>
        <div className="row">
          <SignUpForm dat="hello"/>
        </div>
        OR
        <div className="row">
          <div className="col s3 center">
          
          </div>
          <div className="col s3">
            <FacebookButton />
          </div>
          <div className="col s3">
            <GoogleButton />
          </div>
          <div className="col s3 center">
            
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpPage;
