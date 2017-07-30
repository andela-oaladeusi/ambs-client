import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRegistration } from '../../../actions/AuthActions';
import TextFieldGroup from '../../commons/TextFieldGroup';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      fullName: '',
      email: '',
      password: ''
    }
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userRegistration(this.state);
  }

  render() {
    return (
      <form id="myForm" onSubmit={(e) => this.onSubmit(e)} className="col s12" method="POST">
        <div className="row">
          <TextFieldGroup
            id="userName"
            field="userName"
            value={this.state.userName}
            type='text'
            label="Username"
            placeholder="Username"
            onChange={(e) => this.onChange(e)}
            icon="perm_identity"
          />
          <TextFieldGroup
            id="fullName"
            field="fullName"
            value={this.state.fullName}
            type='text'
            label="Fullname"
            placeholder="Fullname"
            onChange={(e) => this.onChange(e)}
            icon="account_circle"
          />
        </div>
        <div className="row">
          <TextFieldGroup
            id="email"
            field="email"
            value={this.state.email}
            type='email'
            label="Email"
            placeholder="xxx@mail.com"
            onChange={(e) => this.onChange(e)}
            icon="email"
          />
          <TextFieldGroup
            id="password"
            field="password"
            value={this.state.password}
            type="password"
            label="Password"
            placeholder="Password here"
            onChange={(e) => this.onChange(e)}
            icon="lock"
          />
        </div>
        <button className="btn waves-effect waves-light"> Register
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userRegistration: bindActionCreators(userRegistration, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm);
