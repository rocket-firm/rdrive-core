import { getModelsFetch } from 'api';
import { getModelsFetchId } from 'api';
import { modelAdapter, modelIdAdapter } from 'services';

const types = {
    GET_MODELS: 'GET_MODELS',
    GET_MODELS_ID: 'GET_MODELS_ID'
}

export const initialState = {
    isFetch: false
}

export const successModel = (payload) => {
    return {
        type: types.GET_MODELS,
        payload
    }
}

export const successModelId = (payload) => {
    return {
        type: types.GET_MODELS_ID,
        payload
    }
}

export const getModels = (name) => async (dispatch) => {
    let data = await getModelsFetch(name);
    dispatch(successModel(modelAdapter(data, name)))
}

export const getModelsId = (params) => async (dispatch) => {
    let data = await getModelsFetchId(params)
    dispatch(successModelId(modelIdAdapter(params, data)))
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_MODELS:
            return {
                ...state,
                [payload.name]: {
                    data: payload.data,
                    links: payload.links,
                    meta: payload.meta
                },
                isFetch: true,

            }
        case types.GET_MODELS_ID:
            return {
                ...state,
                ...payload,
                isFetch: true,
            }
        default:
            return {
                ...state
            }
    }
}
