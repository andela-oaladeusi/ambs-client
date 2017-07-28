import React, { Component } from 'react';
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
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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

export default SignUpForm;




// <div class="row">
//         <div class="input-field col s6">
//           <i class="material-icons prefix">account_circle</i>
//           <input id="icon_prefix" type="text" class="validate">
//           <label for="icon_prefix">First Name</label>
//         </div>
//         <div class="input-field col s6">
//           <i class="material-icons prefix">phone</i>
//           <input id="icon_telephone" type="tel" class="validate">
//           <label for="icon_telephone">Telephone</label>
//         </div>
//       </div>