import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { home } from '../../actions/HomeActions';
import Main from './Main';
import '../../../styles/index.css';


class LandingPage extends Component {

	componentDidMount() {
		const code = this.props.location.query.code;
    if (!!code) {
      this.props.home(code)
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

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.Home.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    home: bindActionCreators(home, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
