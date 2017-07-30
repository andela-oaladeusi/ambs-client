import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { logout } from '../../actions/AuthActions';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  onClickSignOut() {
    this.props.logout();
  }

  showSignUpSignIn() {
    return (
      <ul className="right hide-on-med-and-down">
        <li><Link to={`/auth/register`} activeStyle={{color: '#000000'}}>Sign Up</Link></li>
        <li><Link to={`/auth/login`} activeStyle={{color: '#000000'}}>Sign In</Link></li>
      </ul>
    )
  }

  showSignOut() {
    return (
      <ul className="right hide-on-med-and-down">
        <li><Link to={`/`} onClick={() => this.onClickSignOut()}>Sign Out</Link></li>
        <li className="avatar">
          <img style={ { width: 60, height: 60, marginLeft: 15} } src={this.props.currentUser.avatarId} alt={this.props.currentUser.fullName} className="circle"/>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <header>
        <nav className="light-blue lighten-1">
          <div className="nav-wrapper container">
            <a id="logo-container" href="/" className="brand-logo left">AMBS</a>
            { this.props.isAuthenticated ? this.showSignOut() : this.showSignUpSignIn() }
          </div>
        </nav>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: bindActionCreators(logout, dispatch)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.UserAuth.isAuthenticated,
    currentUser: state.UserAuth.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
