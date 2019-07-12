import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { Provider, connect } from 'react-redux';
import store from 'store';
import { initLocalizations } from 'services';


const LanguageContainer = (props) => {
  const { localizationsData } = props;
  console.log('here')
  if (Object.keys(localizationsData).length) {
    console.log('there')
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

ReactDOM.render(<App />, document.getElementById('app'));
