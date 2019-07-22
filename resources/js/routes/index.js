import React from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { history } from 'services';

import Auth from 'containers/Authorization';
import DashboardScreenContainer from 'containers/DashboardScreenContainer';
import Kit from 'screens/Kit';


export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/login/" component={Auth} />
      <Route exact path="/kit/" component={Kit} />
      <Route exact path="/dashboard/" component={DashboardScreenContainer} />
    </Switch>
  </Router>
);
