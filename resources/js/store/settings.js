import { getSettings } from 'api';

export const types = {
  FETCH_SETTINGS_REQUEST: 'FETCH_SETTINGS_REQUEST',
  FETCH_SETTINGS_SUCCESS: 'FETCH_SETTINGS_SUCCESS',
};

export const fetchSettingsRequest = () => ({
  type: types.FETCH_SETTINGS_REQUEST,
});

export const fetchSettingsSuccess = payload => ({
  type: types.FETCH_SETTINGS_SUCCESS,
  payload,
});

export const fetchSettings = () => async (dispatch) => {
  dispatch(fetchSettingsRequest());
  const data = getSettings();
  dispatch(fetchSettingsSuccess(data));
};

export const initialState = {
  settings: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: payload,
      };
    default:
      return state;
  }
};
