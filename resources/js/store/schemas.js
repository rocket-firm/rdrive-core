import { getSchemasList } from 'api';
import {schemaAdapter} from 'services';

export const types = {
  FETCH_SCHEMAS_REQUEST: 'FETCH_SCHEMAS_REQUEST',
  FETCH_SCHEMAS_SUCCESS: 'FETCH_SCHEMAS_SUCCESS',
};

export const fetchSchemasRequest = () => ({
  type: types.FETCH_SCHEMAS_REQUEST,
});

export const fetchSchemasSuccess = payload => ({
  type: types.FETCH_SCHEMAS_SUCCESS,
  payload,
});

export const fetchSchemasList = () => async (dispatch) => {
  dispatch(fetchSchemasRequest());
  const data = await getSchemasList();
  console.log(data)
  dispatch(fetchSchemasSuccess(schemaAdapter(data)));
};

export const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_SCHEMAS_SUCCESS:
      return {
        ...payload,
      };
    default:
      return state;
  }
};
