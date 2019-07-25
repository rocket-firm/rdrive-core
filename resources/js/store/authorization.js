import {getUserFetch} from 'api'
import {stopSubmit} from 'redux-form'

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

export const getUserAuthenticate = (e) => async (dispatch) => {
    try {
        const formData = new FormData();
    
        formData.append('email', e.email);
        formData.append('password', e.password);
        let res = await fetch('/api/admin/auth/login', {
            method: 'POST',
            body: formData
        })
        if(res.status != 200) throw new Error('not corrected');
        let {token} = await res.json();
        dispatch(authenticateSuc(token))
    } catch (err) {
        console.log(err)
        dispatch(stopSubmit('login', {
            email: 'altynboi',
            password: 'altynebr'
        }))
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
                token: payload
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