/*global auth2*/
import React, { Component } from 'react';
import '../../../../node_modules/materialize-social/materialize-social.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { google } from '../../actions/HomeActions';


class GoogleButton extends Component {

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
      <button onClick={(e) => this.onClick(e)} id="signinButton" className="btn waves-effect waves-light social google">
        <i className="fa fa-google"></i>
        Google
      </button>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    google: bindActionCreators(google, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(GoogleButton);
