import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { fetchLanguagesList, fetchLocalizationData } from 'store/localizations';
import store from 'store';
import {
  postMissedTranslations,
} from 'api';

const MISSED_TRANSLATIONS_SEND_INTERVAL = 1000;

const missingTranslations = {};

export const missingTranslationsSubject = new Subject();

export const getLanguage = () => (
  store.getState().localizations.language
);

export const getLanguages = () => (
  store.getState().localizations.languagesList
);

export const getLocalizationData = () => (
  store.getState().localizations.localizationsData
);

const collectMissingData = ({ group, key, defaultValue }) => {
  if (!missingTranslations[group]) {
    missingTranslations[group] = {};
  }
  missingTranslations[group][key] = defaultValue;
};

export const t = (text, defaultValue) => {
  const lang = getLanguage();
  const data = getLocalizationData();

  if (!data) { return '...'; }
  const dataObject = data[lang] || {};
  const [group, key] = text.split('.');
  const value = dataObject[group] && dataObject[group][key] || null;
  if (value) {
    return value;
  }
  collectMissingData({ group, key, defaultValue });
  missingTranslationsSubject.next({});
  return defaultValue;
};

export const sendMissedLocalizations = async () => {
  await postMissedTranslations(missingTranslations);
  Object.keys(missingTranslations).forEach((key) => {
    delete missingTranslations[key];
  });
};

export const initLocalizations = () => {
  store.dispatch(fetchLanguagesList());
  store.dispatch(fetchLocalizationData());
  missingTranslationsSubject.pipe(debounceTime(MISSED_TRANSLATIONS_SEND_INTERVAL)).subscribe({
    next: () => {
      sendMissedLocalizations();
    },
  });
};
