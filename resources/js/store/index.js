import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {
  putNested,
  loadStore,
  initStoreSaving,
  loadStoreValues,
} from 'services';
import { types as rootTypes, putValue } from './root';
import localizations from './localizations';
import settings from './settings';
import schemas from './schemas';
import user from './authorization';

const reducers = combineReducers({
  localizations,
  settings,
  schemas,
  user,
  form: formReducer
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case rootTypes.PUT_VALUE:
      return putNested(state, action.payload.key, action.payload.value);
    default:
      return reducers(state, action);
  }
};

const savedStore = loadStore();

const fieldsForSave = [
  'localizations.language',
  'user'
];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

loadStoreValues(store, savedStore, putValue);
initStoreSaving(store, savedStore, fieldsForSave);

export default store;
