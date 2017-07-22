import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { home } from '../actions/HomeActions';

class Home extends Component {

	componentDidMount() {
    this.props.home()
  }

	render() {
		return (
			<div>
				<div> Welcome Again!! </div>
				<div>{this.props.data}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
