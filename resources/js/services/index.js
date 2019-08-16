export const {
  history,
} = require('./history');
export const {
  getNested,
  putNested,
} = require('./nested');
export const {
  saveStore,
  loadStore,
  initStoreSaving,
  loadStoreValues,
} = require('./persistence');
export const {
  getLanguage,
  getLanguages,
  getLocalizationData,
  initLocalizations,
  t,
} = require('./localization');

export const {
  fetchDecor
} = require('./request');
export const {
  schemaAdapter
} = require('./adapter')