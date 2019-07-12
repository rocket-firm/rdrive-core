import {
  getLanguagesList,
  getLocalizationData,
} from 'api';

const types = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  FETCH_LANGUAGES_LIST_REQUEST: 'FETCH_LANGUAGES_LIST_REQUEST',
  FETCH_LANGUAGES_LIST_SUCCESS: 'FETCH_LANGUAGES_LIST_SUCCESS',
  FETCH_LOCALIZATION_DATA_REQUEST: 'FETCH_LOCALIZATION_DATA_REQUEST',
  FETCH_LOCALIZATION_DATA_SUCCESS: 'FETCH_LOCALIZATION_DATA_SUCCESS',
};

const setLanguageAction = payload => ({
  type: types.SET_LANGUAGE,
  payload,
});

const fetchLanguagesListRequest = () => ({
  type: types.FETCH_LANGUAGES_LIST_REQUEST,
});

const fetchLanguagesListSuccess = payload => ({
  type: types.FETCH_LANGUAGES_LIST_SUCCESS,
  payload,
});

const fetchLocalizationDataRequest = () => ({
  type: types.FETCH_LOCALIZATION_DATA_REQUEST,
});

const fetchLocalizationDataSuccess = payload => ({
  type: types.FETCH_LOCALIZATION_DATA_SUCCESS,
  payload,
});

export const setLanguage = payload => async (dispatch) => {
  dispatch(setLanguageAction(payload));
};

export const fetchLanguagesList = () => async (dispatch) => {
  dispatch(fetchLanguagesListRequest());
  const data = await getLanguagesList();
  dispatch(fetchLanguagesListSuccess(data));
};

export const fetchLocalizationData = () => async (dispatch) => {
  dispatch(fetchLocalizationDataRequest());
  const data = await getLocalizationData();
  dispatch(fetchLocalizationDataSuccess(data));
};

export const initialState = {
  language: null,
  languagesList: [],
  localizationsData: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case types.FETCH_LANGUAGES_LIST_SUCCESS:
      return {
        ...state,
        languages: payload,
        language: state.language || [...payload].shift().value,
      };
    case types.FETCH_LOCALIZATION_DATA_SUCCESS:
      return {
        ...state,
        localizationsData: payload,
      };
    default:
      return state;
  }
};
