import { getNested } from './nested';

export const saveStore = (store) => {
  localStorage.setItem('store', JSON.stringify(store));
};

export const loadStore = () => {
  try {
    return JSON.parse(localStorage.getItem('store')) || {};
  } catch {
    return {};
  }
};

export const initStoreSaving = (store, savedStore, fieldsForSave) => {
  let oldState = store.getState();
  let currentState = oldState;
  const storeToSave = { ...savedStore };
  store.subscribe(() => {
    currentState = store.getState();
    fieldsForSave.forEach((field) => {
      if (getNested(oldState, field) !== getNested(currentState, field)) {
        storeToSave[field] = getNested(currentState, field);
      }
    });
    if (Object.keys(storeToSave).length) {
      saveStore(storeToSave);
    }
    oldState = currentState;
  });
};

export const loadStoreValues = (store, savedStore, putValue) => {
  Object.entries(savedStore).forEach(([key, value]) => {
    store.dispatch(putValue({ key, value }));
  });
};
