/*global auth2*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpForm from './SignUpForm';
import { google } from '../../../actions/HomeActions';
import '../../../../styles/index.css';
import FacebookButton from '../../commons/FacebookButton';
import GoogleButton from '../../commons/GoogleButton';

class SignUpPage extends Component {

  onClick(e) {
    const _this = this;
    auth2.grantOfflineAccess().then((authResult) => {
      if (authResult['code']) {
        _this.props.google(authResult['code']);
      }
    });
  }

  render() {
    return (
      <div className="container center">
        <h4 className="header col s12 light">Manage and listen to your favourites songs</h4>
        <h5>Register to get started</h5>
        <br/> <br/>
        <div className="row">
          <SignUpForm />
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

const mapDispatchToProps = (dispatch) => {
  return {
    google: bindActionCreators(google, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
