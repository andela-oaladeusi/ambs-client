import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import { getTokenCookie } from './utils/setCookies';
import { getMyInformation } from './actions/AuthActions';

class App extends Component {
  componentDidMount() {
    if (getTokenCookie()) {
      this.props.getMyInformation();
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>
      // <div className="App">
      //   <Header />
      //   <div>{this.props.children}</div>
      //   <Footer />
      // </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyInformation: bindActionCreators(getMyInformation, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(App);
