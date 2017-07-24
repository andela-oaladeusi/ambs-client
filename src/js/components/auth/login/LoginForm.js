import React, { Component } from 'react';
import TextFieldGroup from '../../commons/TextFieldGroup';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginEmailOrUsername: '',
      LoginPassword: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  onSubmit(e) {
    console.log(this.state)
  }
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)} className="col s12">
        <div className="row">
          <TextFieldGroup
            id="LoginEmailOrUsername"
            field="LoginEmailOrUsername"
            value={this.state.LoginEmailOrUsername}
            type='text'
            label="Username Or Email"
            placeholder="Email or Username"
            onChange={(e) => this.onChange(e)}
          />
        </div>
        <div className="row">
          <TextFieldGroup
            id="LoginPassword"
            field="LoginPassword"
            value={this.state.LoginPassword}
            type="password"
            label="Password"
            placeholder="Password here"
            onChange={(e) => this.onChange(e)}
          />
        </div>
        <button className="btn waves-effect waves-light" name="action">Login
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

export default LoginForm;

        // <div class="input-field col s12">
        //   <input disabled value="I am not editable" id="disabled" type="text" class="validate">
        //   <label for="disabled">Disabled</label>
        // </div>

// http://api-prod.andela.com/login?redirect_url=http://allocations.andela.com

// http://api-staging.andela.com/login?redirect_url=http://api-staging.andela.com/api/v1/teams