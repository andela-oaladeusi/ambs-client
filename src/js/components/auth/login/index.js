/*global FB*/
/*global gapi*/
/*global auth2*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';
import { google } from '../../../actions/HomeActions';

class UserLoginPage extends Component {

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
      <div className="container">
        <div className="row">
          <LoginForm />
        </div>
        OR
        <div className="row">
          <div className="col s3 center">
          
          </div>
          <div className="col s3">
            <a
              href="https://www.facebook.com/v2.10/dialog/oauth?client_id=1892375284373018&redirect_uri=http://localhost:3000"
              className="btn waves-effect waves-light"
              name="action"
            >
              Facebook
            </a>
          </div>
          <div className="col s3">
            <button onClick={(e) => this.onClick(e)} id="signinButton" className="btn waves-effect waves-light">Google</button>
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

export default connect(null, mapDispatchToProps)(UserLoginPage);
