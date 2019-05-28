import React from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { history } from 'services';

import Dashboard from 'screens/Dashboard';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/dashboard/" component={Dashboard} />
    </Switch>
  </Router>
);
