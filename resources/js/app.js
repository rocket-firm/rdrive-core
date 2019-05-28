import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import { initLocalizations } from 'services';

class App extends Component {
  componentDidMount() {
    initLocalizations();
  }

  render() {
    return (
      <Provider store={store}>
        <Routes/>  
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
