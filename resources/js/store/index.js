import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import localizations from './localizations';
import settings from './settings';

const reducers = combineReducers({
  localizations,
  settings,
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
