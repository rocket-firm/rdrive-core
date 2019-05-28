import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { Provider } from 'react-redux';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
