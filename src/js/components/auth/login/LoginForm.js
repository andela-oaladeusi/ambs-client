import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextFieldGroup from '../../commons/TextFieldGroup';
import { normalUserLogin, confirmAccount } from '../../../actions/AuthActions';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      password: '',
      loading: false
    }
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.props.confirmationToken) {
      const token = this.props.confirmationToken;
      this.props.confirmAccount(this.state, token);
    } else {
      this.props.normalUserLogin(this.state);
      this.setState({ loading: false })
    }
  }
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)} className="col s12 center" method="POST">
        <div className="row center">
          <TextFieldGroup
            id="LoginEmailOrUsername"
            field="identity"
            value={this.state.identity}
            type='text'
            label="Username Or Email"
            placeholder="Email or Username"
            onChange={(e) => this.onChange(e)}
            icon="perm_identity"
          />
          <TextFieldGroup
            id="LoginPassword"
            field="password"
            value={this.state.LoginPassword}
            type="password"
            label="Password"
            placeholder="Password here"
            onChange={(e) => this.onChange(e)}
            icon="lock"
          />
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action" disabled={this.state.loading}>Login
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    normalUserLogin: bindActionCreators(normalUserLogin, dispatch),
    confirmAccount: bindActionCreators(confirmAccount, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
