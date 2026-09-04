import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import Routes from 'routes';
import { Provider, connect } from 'react-redux';
import store from 'store';
import { initLocalizations } from 'services';


const LanguageContainer = (props) => {
  const { localizationsData } = props;
  if (Object.keys(localizationsData).length) {
    return (<Routes />);
  }
  return null;
};

const AppContainer = connect(
  ({
    localizations: { localizationsData },
  }) => ({
    localizationsData,
  }),
  null,
)(LanguageContainer);


class App extends Component {
  componentDidMount() {
    initLocalizations();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const rootElement = document.getElementById('app');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
