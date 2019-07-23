import React from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { history } from 'services';

import Auth from 'containers/Authorization';
import DashboardScreenContainer from 'containers/DashboardScreenContainer';
import Kit from 'screens/Kit';
import TableScreenContainer from '../containers/TableScreenContainer';


export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/login/" component={Auth} />
      <Route exact path="/kit/" component={Kit} />
      <Route exact path="/dashboard/" component={DashboardScreenContainer} />
      <Route exact path="/models/:schema" component={TableScreenContainer} />
    </Switch>
  </Router>
);
