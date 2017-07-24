import React, { Component } from 'react';

export default class FacebookButton extends Component {
  constructor(props) {
    super(props);
      this.FB = props.fb;
  }

  componentDidMount() {
    this.FB.Event.subscribe('auth.login', this.onLogin.bind(this));
    this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
    this.FB.Event.subscribe('auth.statusChange', this.onStatusChange.bind(this));
  }

  componentWillUpdate() {
    this.checkLoginState();
  }
      
  onStatusChange(response) {
    if( response.status === "connected" ) {
      // console.log(response);
    }
  }

  onLogout(response) {
    // console.log(response);
  }

  onLogin(response) {
    // console.log(response);
  }

  checkLoginState() {
    this.FB.getLoginStatus((response) => {
      // console.log(response);
    });
  }

  render() {
    return (
      <div 
        className="fb-login-button" 
        data-max-rows="1" 
        data-size="medium" 
        data-show-faces="false" 
        data-auto-logout-link="true"
        data-button-type="login_with"
        data-use-continue-as="false"
      >
      facebook
      </div>
    );
  }
};
