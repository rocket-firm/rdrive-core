import { getUserLogin, logoutUser } from 'api'
import { stopSubmit } from 'redux-form'
import { history } from 'services'

const types = {
    SET_USER: 'SET_USER',
    AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE',
    AUTHENTICATE_LOGOUT: 'AUTHENTICATE_LOGOUT'
}

const authenticateSuc = payload => ({
    type: types.AUTHENTICATE_SUCCESS,
    payload
})

const authenticateErr = payload => ({
    type: types.AUTHENTICATE_FAILURE,
    payload
})

const authenticateLogout = () => ({
    type: types.AUTHENTICATE_LOGOUT
})

export const initialState = {
    isAuthenticated: false,
    user: {},
    token: null
}

export const getUserAuthenticate = (e) => async (dispatch) => {
    try {
        let res = await getUserLogin(e);
        if (res.status != 200) throw new Error('not corrected');
        let { token } = await res.json();
        dispatch(authenticateSuc(token))
    } catch (err) {
        dispatch(stopSubmit('login', {
            email: 'incorrect',
            password: 'incorrect'
        }))
    }
}

export const logoutUserAuth = (token) => async (dispatch) => {
    try {
        let res = await logoutUser(token);
        if (res.status != 200) throw new Error('cannot logout')
        dispatch(authenticateLogout())
        history.replace('/login')
    } catch (err) {
        alert(err)
    }
}

export default (state = initialState, { type, payload }) => {
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
                token: null
            }

        case types.AUTHENTICATE_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }
        default:
            return state;
    }
}

