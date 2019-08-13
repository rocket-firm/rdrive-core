import { getModelsFetch } from 'api';

const types = {
    GET_MODELS: 'GET_MODELS'
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

export const getModels = (name) => async (dispatch) => {
    let data = await getModelsFetch(name);
    console.log(name)
    dispatch(successModel({data, name}))
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_MODELS:
            return {
                ...state,
                [payload.name]: payload.data,
                isFetch: true
            }
        default:
            return {
                ...state
            }
    }
}