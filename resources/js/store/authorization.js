import {getUserFetch} from 'api'

const types = {
    SET_USER: 'SET_USER',
    AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE',
}

const authenticateSuc = payload => ({
    type: types.AUTHENTICATE_SUCCESS,
    payload
})

const authenticateErr = payload => ({
    type: types.AUTHENTICATE_FAILURE,
    payload
})

export const initialState = {
    isAuthenticated: false,
    user: {}
}

export const getUserAuthenticate = (user) => async (dispatch) => {
    let data
    try {
         data = await getUserFetch(user)
        dispatch(authenticateSuc(data))
    } catch (err) {
        dispatch(authenticateErr(data))
    }
}

export default (state=initialState, {type, payload} ) => {
    switch (type) {
        case types.SET_USER: 
            return {
                ...state,
                user: payload.user
            }
        case types.AUTHENTICATE_SUCCESS: 
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        case types.AUTHENTICATE_FAILURE: 
            return {
                ...state,
                isAuthenticated: false,
                user: initialState.user
            }
        default:
            return state;
    }
}