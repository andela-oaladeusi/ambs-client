import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './js/App';
import Home from './js/components/home';

export default (
  <Route path="/"  component={App} >
      <IndexRoute component={Home} />
  </Route>
);
