import React, { Component } from 'react';
import '../../../../node_modules/materialize-social/materialize-social.css';


class FacebookButton extends Component {

  render() {
    return (
      <a
        href="https://www.facebook.com/v2.10/dialog/oauth?client_id=1892375284373018&redirect_uri=http://localhost:3000"
        className="btn waves-effect waves-light social facebook"
        name="action"
      >
      <i className="fa fa-facebook"></i>
        Facebook
      </a>
    )
  }

}

export default FacebookButton;
