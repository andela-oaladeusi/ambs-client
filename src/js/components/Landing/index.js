import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { home } from '../../actions/HomeActions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../../../styles/index.css';


class LandingPage extends Component {

	componentDidMount() {
		const code = this.props.location.query.code;
    if (!!code) {
      this.props.home(code)
    }
  }

	componentWillReceiveProps

	render() {
		return (
			<div>
				<Header />
				<Main message={this.props.data}/>
				<Footer />
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
