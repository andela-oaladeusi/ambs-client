import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { facebookUserLogin } from '../../actions/AuthActions';
import Main from './Main';
import '../../../styles/index.css';


class LandingPage extends Component {

	componentDidMount() {
		const code = this.props.location.query.code;
    if (!!code) {
      this.props.facebookUserLogin(code)
    }
  }

	render() {
		return (
			<div>
				<Main message={this.props.data}/>
			</div>
	  );
	}
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     data: state.Home.message
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    facebookUserLogin: bindActionCreators(facebookUserLogin, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LandingPage);
