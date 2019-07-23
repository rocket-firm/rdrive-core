import {getModelsFetch} from 'api';

const types = {
    GET_MODELS: 'GET_MODELS'
}

export const initialState = {
    models: []
}

export const successModel = payload => {
    return {
        type: types.GET_MODELS,
        payload
    }
}

export const getModels = (name) => async (dispatch) => {
    let data = await getModelsFetch(name);
    dispatch(successModel(data))
}

export default (state=initialState, {type, payload}) => {
    switch(type) {
        case types.GET_MODELS:
            return {
                ...state,
                models: payload
            }
        default: 
            return {
                ...state
            }
    }
}