import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './js/App';
import LandingPage from './js/components/Landing/LandingPage';

export default (
  <Route path="/"  component={App} >
      <IndexRoute component={LandingPage} />
  </Route>
);
