import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './js/App';
import LandingPage from './js/components/Landing';
import UserLoginPage from './js/components/auth/login';
import SignUpPage from './js/components/auth/register';
import ConfirmEmail from './js/components/auth/register/ConfirmEmail';

export default (
  <Route path="/"  component={App} >
      <IndexRoute component={LandingPage} />
      <Route path='auth/login' component={UserLoginPage} />
      <Route path='auth/register' component={SignUpPage} />
      <Route path='auth/account/confirmation' component={ConfirmEmail} />
  </Route>
);
