/*global auth2*/
import React, { Component } from 'react';
import '../../../../node_modules/materialize-social/materialize-social.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { googleUserLogin } from '../../actions/AuthActions';


class GoogleButton extends Component {

  onClick(e) {
    const _this = this;
    auth2.grantOfflineAccess().then((authResult) => {
      if (authResult['code']) {
        _this.props.googleUserLogin(authResult['code']);
      }
    });
  }

  render() {
    return (
      <button onClick={(e) => this.onClick(e)} id="signinButton" className="btn waves-effect waves-light social google">
        <i className="fa fa-google"></i>
        Google
      </button>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    googleUserLogin: bindActionCreators(googleUserLogin, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(GoogleButton);
