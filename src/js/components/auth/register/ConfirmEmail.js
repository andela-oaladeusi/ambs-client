import React, { Component } from 'react';
import LoginForm from '../login/LoginForm';

class ConfirmEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmAccount: false
    }
  }

  componentDidMount() {
    const token = this.props.location.query.confirmation_token;
    if (!!token) {
      this.setState({ confirmAccount: true,  });
    }
  }
  showLogin() {
    const token = this.props.location.query.confirmation_token;
    return (
      <div>
        <p>Login to complete your registration</p>
        <LoginForm confirmationToken={token}/>
      </div>
    );
  }
  showComfirmationMessage() {
    return (
      <div>
        <p>Your account was successfully created</p>
        <p>A confirmation link has been sent to your email</p>
      </div>
    )
  }

  render() {
    return (
      <main>
        <div className="container">
          <br/>
          <div className="row center">
            { this.state.confirmAccount ? this.showLogin() : this.showComfirmationMessage()}
          </div>
        </div>
      </main>
    )
  }
}

export default ConfirmEmail;
